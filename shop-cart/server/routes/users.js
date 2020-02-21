const router = require('koa-router')()
const GoodModel = require('../models/goods');
const UserModel = require('../models/users')
router.prefix('/users')
/* 登录模块 */
router.post('/login',async ctx=>{
  var data = ctx.request.body;
  var res = await UserModel.findOne(data);
  if(res){
    ctx.cookies.set("userId",res.userId,{
      maxAge:1000*60*60
    })
    ctx.cookies.set("userName",res.userName,{
      maxAge:1000*60*60
    })
    ctx.body = {
      code:"200",
      msg:"登陆成功",
      result:res.userName
    }
  }else{
    ctx.body = {
      code:"400",
      msg:"用户名或密码错误"
    }
  }
})
router.get('/checkLogin',async ctx=>{
  var userId = ctx.cookies.get("userId")
  if(userId){
    ctx.body = {
      code:200,
      result:ctx.cookies.get("userName"),
      msg:"登陆成功"
    }
  }else{
    ctx.body = {
      code:1001,
      msg:"未登录"
    }
  }
})
router.post('/logout',async ctx=>{
  ctx.cookies.set("userId","",{
    maxAge:-1
  })
  ctx.cookies.set("userName","",{
    maxAge:-1
  })
  ctx.body = {
    code:200,
    msg:"退出登录"
  }
})

/* 购物车模块 */
router.get('/cartList',async ctx=>{
  var data = await UserModel.findOne({});
  var res = data.cartList;
  ctx.body = {
    code:200,
    result:res
  }
})
router.post('/cartList/add',async ctx=>{
  var userId = ctx.cookies.get("userId");
  if(userId){
    var {productId} = ctx.request.body;
    console.log(productId)
    var products = await GoodModel.findOne({productId:productId});
    var obj = JSON.parse(JSON.stringify(products));
    obj.productNum = 1;
    obj.checked = true;
    var userData = await UserModel.findOne({})
    if(userData.cartList.every(item => item.productId != productId)){
      await UserModel.update({userId:userId},{$push:{"cartList":obj}})
      ctx.body = {
        msg:"添加成功",
        code:200
      }
    }else{
      ctx.body = {
        msg:"此商品已经添加到购物车",
        code:200
      }
    }
  }else{
    ctx.body={
      msg:"没有登陆"
    }
  }
})
router.post('/cartList/del',async ctx=>{
  var {productId} = ctx.request.body;
  var userId = ctx.cookies.get('userId');
  var data = await UserModel.update({userId:userId},{$pull:{cartList:{productId:productId}}});
  if(data.ok == 1){
    ctx.body = {
      code:200,
      msg:'删除成功'
    }
  }else{
    ctx.body = {
      code:1001,
      msg:'删除失败'
    }
  }
})
router.post('/cartList/edit',async ctx=>{
  var {productId,productNum,checked} = ctx.request.body;
  var userId = ctx.cookies.get('userId');
  var data = await UserModel.update({userId:userId,"cartList.productId":productId},{$set:{
    "cartList.$.productNum":productNum,
    "cartList.$.checked":checked
  }});
  console.log(data)
  if(data.ok == 1){
    ctx.body = {
      code:200,
      msg:'修改成功'
    }
  }
})
module.exports = router