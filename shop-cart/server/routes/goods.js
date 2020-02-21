const router = require('koa-router')()
const GoodModel = require('../models/goods');
router.get('/goods/list', async (ctx) => {
  var {start,limit} = ctx.query;
  // console.log(start)
  // console.log(limit)
  var total = await GoodModel.find({}).count();
  var data = await GoodModel.find({}).skip(Number(start)).limit(Number(limit));
  ctx.body = {
    code:200,
    msg:"首页数据请求成功",
    result:data,
    total:total
  }
})
/* 根据价格大小查询 */
router.get("/goods/price",async ctx=>{
  var {gt,lt} = ctx.query;
  var data = await GoodModel.find({salePrice:{$gt:gt,$lt:lt}})
  if(data.length){
    ctx.body = {
      code:200,
      msg:"数据请求成功",
      result:data,
      total:data.length
    }
  }else{
    ctx.body = {
      code:1001,
      msg:"没有数据"
    }
  }
})
module.exports = router