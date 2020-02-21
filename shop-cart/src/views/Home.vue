<template>
  <div>
    <div class="top">
        <img class="logo" src="../images/logo.svg" alt="">
        <div class="btn">
            <span class="successName">{{successName}}</span>
            <el-button class="login" @click="dialogFormVisible = true">登录</el-button>
            <el-dialog title="登陆界面" :visible.sync="dialogFormVisible">
                <el-form :model="form" status-icon :rules="rules">
                    <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
                        <el-input type="password" v-model="form.pass"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="handleLogin">确 定</el-button>
                </div>
            </el-dialog>
            <el-button class="logout" @click="handleLogout">退出</el-button>
            <router-link to="/cart">
                <i class="el-icon-shopping-cart-full"></i>
            </router-link>
        </div>
    </div>
    <div class="wrap">
      <div class="head">
        <span class="index">首页</span>
        <i class="el-icon-d-arrow-left"></i>
        <span class="detail">商品详情</span>
        <div class="tip">
            <div class="sort-price">
                <span>Sort by:</span>
                <el-button @click="handleDefault" size="small" round class="default">default</el-button>
                <span>Price</span>
                <i @click="handleSort" :class="(sortFlag==1)?'el-icon-top':'el-icon-bottom'"></i>
            </div>
        </div>
      </div>
    </div>
    <div class="home">
      <div class="price">
        <h3>PRICE:</h3>
        <div v-for="item of searchPrice" :key="item.id">
            <p @click="handlePrice(item.gt,item.lt)">{{item.gt}}--{{item.lt}}</p>
        </div>
      </div>
      <div class="content">
        <div v-for="item of goodsList" :key="item.productId">
          <img :src="item.productImage" alt="">
          <p class="name">{{item.productName}}</p>
          <p class="salePrice">￥{{item.salePrice}}</p>
          <el-button class="addCart" @click="handleCartAdd(item.productId)" type="danger">加入购物车</el-button>
        </div>
      </div>
      <p v-show="!goodsList.length" class="noData">没有更多数据</p>
    </div>
    <el-pagination class="bottom"
      @current-change = "getPage"
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name:"Home",
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        }
      };
      return {
        dialogFormVisible: false,
        dialogVisible: false,
        form: {
            username: "",
            pass: ""
        },
        rules: {
            pass: [{ validator: validatePass, trigger: "blur" ,required:true}],
            username: [  { required: true, message: '请输入用户名', trigger: 'blur' }]
        },
        formLabelWidth: "120px",
        searchPrice:[
          {gt:0,lt:100,id:1001},
          {gt:100,lt:500,id:1002},
          {gt:500,lt:1000,id:1003},
          {gt:1000,lt:5000,id:1004},
          {gt: 5000, lt: 10000, id: 1005 }
        ],
        goodsList:[],
        total:10,
        start: 0,
        limit: 8,
        sortFlag: 1,
        successName:''
      }
    },
    mounted(){
      this.initData(),
      this.$http('/users/checkLogin').then(res=>{
        if(res.data.code==200){
          this.successName = res.data.result
        }else{
          this.$message({
            message:"未登陆",
            duration:1000,
            type:"warning"
          })
        }
      })
    },
    methods:{
      initData(){
        this.$http
          .get("/goods/list", {
            //通过params属性传递参数给后端
            params: { start: this.start, limit: this.limit }
          })
          .then(res => {
            if (res.data.code == 200) {
              this.goodsList = res.data.result;
              this.total = Math.ceil(res.data.total / this.limit) * 10;
            }
          })
      },
      getPage(page){
        this.start = (page-1)*this.limit;
        this.initData();
      },
      handlePrice(gt,lt){
        this.$http({
          url:"/goods/price",
          method:"get",
          params:{
            gt,
            lt
          }
        }).then(res=>{
          if(res.data.code == 200){
            this.goodsList = res.data.result;
            this.total = 10;
          }else{
            this.goodsList = [];
            this.$message({
              duration:1000,
              message:res.data.msg,
              type:'warning'
            })
          }
        })
      },
      handleDefault(){
          this.initData()
      },
      compareUp(value){
        return (a,b)=>{
          return a[value]-b[value];
        }
      },
      compareDown(value){
        return (a,b)=>{
          return b[value]-a[value];
        }
      },
      handleSort(){
        this.sortFlag = (this.sortFlag == 1) ? -1:1;
        if(this.sortFlag == 1){
          this.goodsList.sort(this.compareUp("salePrice"))
        }else{
          this.goodsList.sort(this.compareDown("salePrice"))
        }
      },
      handleLogin(){
        if(this.form.username && this.form.pass){
          this.$http({
            url:"/users/login",
            method:"post",
            data:{
              userName:this.form.username,
              userPwd:this.form.pass
            }
          }).then(res=>{
          //登陆成功
          if(res.data.code==200){
            this.$message({
              message:res.data.msg,
              duration:1000,
              type:"success"
            })
            this.successName = res.data.result
            this.dialogFormVisible = false;
          }else{
            //用户名和密码错误
            this.$message({
              duration:1000,
              message:res.data.msg,
              type:"error"
            })
          }
        })
        }else{
          this.$message({
            message:"用户名或密码不能为空",
            duration:1000,
            type:"error"
          })
        }
      },
      handleLogout(){
        this.$http.post('/users/logout').then(res=>{
          this.$message({
            message:res.data.msg,
            duration:1000
          })
            this.successName = ""
        })
      },
      handleCartAdd(productId){
        console.log(productId)
        this.$http({
          method:"post",
          url:'/users/cartList/add',
          data:{
            productId
          }
        }).then(res=>{
          console.log(res.data.msg)
          this.$message({
            message:res.data.msg,
            duration:1000,
            type:'success'
          })
        })
      }
    },
    beforeRouteLeave (to, from, next) {
      this.$http('/users/checkLogin').then(res=>{
        if(res.data.code == 200){
          next()
        }else{
          this.$message({
            message:res.data.msg,
            duration:1000
          })
        }
      })
    }
  };
</script>

<style lang="less" scoped>
  .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
  .logo{
    width: 40px;
    height: 40px;
    margin-left: 120px;
  }
  .btn{
    margin-right: 120px;
    display: flex;
    align-items: center;
  }
  .successName{
      color: brown;
      font-weight: bold;
      margin-right: 12px;
  }
  .logout{
    margin-left: 12px;
  }
  .btn i{
    font-size: 30px;
    color: brown;
    margin-left: 12px;
  }
  .wrap{
    width: 100%;
    background-color: #F5F7FC;
  }
  .head{
      text-align: left;
      margin-left: 120px;
      padding-top: 16px;
      height: 100px;
  }
  .index{
      color: #333;
  }
  .el-icon-d-arrow-left{
      margin: 0 6px;
  }
  .el-icon-d-arrow-left,
  .detail{
      color: #666;
      font-size: 16px;
  }
  .tip{
      width: 1120px;
      height: 40px;
      background-color: #fff;
      margin-top: 20px;
      position: relative;
  }
  .sort-price{
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      padding: 4px;
  }
  .default{
      margin-left: 10px;
      margin-right: 14px;
  }
  .content{
    width: 1000px;
  }
  .home{
    display: flex;
    justify-content: space-between;
    background-color: #F5F7FC;
  }
  .price{
    margin-left: 120px;
  }
  img{
    width:200px;
  }
  .content{
    width: 980px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .content>div{
    border: 1px solid #e0e0e0;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #fff;
  }
  .salePrice{
    text-align: left;
    color: #eb7070;
    margin-left: 16px;
  }
  .addCart{
    color: #eb7070;
    background-color: #fff;
    outline:none;
    width: 180px;
    height: 40px;
    margin-bottom: 20px;
  }
  .noData{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .bottom{
    margin-top: 12px;
  }
</style>