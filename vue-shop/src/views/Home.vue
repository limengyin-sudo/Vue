<template>
  <div class="wrap">
    <div class="head">
      <img class="logo" src="../images/logo.png" alt="">
      <div class="btn">
        <span class="successName">{{successName}}</span>
        <el-button @click="dialogFormVisible = true">登录</el-button>
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
        <router-link to="/cartList">
          <i class="el-icon-shopping-cart-full"></i>
        </router-link>
      </div>
    </div>
    <div class="search-content">
      <div class="title">
        <p class="index">首页<span class="detail">>&nbsp;商品详情</span></p>
        <input class="search" type="text" />
        <p class="sort">Sort by: <span @click="handleDefault">default</span>
          <span @click="handleSort">Price<i :class="(sortFlag==1)?'el-icon-top':'el-icon-bottom'"></i></span>
        </p>
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
            <button class="addCart" @click="addCart(item.productId)">加入购物车</button>
          </div>
        </div>
        <p v-show="!goodsList.length" class="noData">没有更多数据</p>
      </div>
    </div>
    <el-pagination
      @current-change = "getPage"
      background
      layout="prev, pager, next"
      :total="30">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
     var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      searchPrice:[
        {gt:0,lt:100,id:1001},
        {gt:100,lt:500,id:1002},
        {gt:500,lt:1000,id:1003},
        {gt:1000,lt:5000,id:1004},
        {gt: 5000, lt: 10000, id: 1005 }
      ],
      total:10,
      limit:8,
      start: 0,
      goodsList:[],
      sortFlag:1,
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        username: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" ,required:true}],
        username: [  { required: true, message: '请输入用户名', trigger: 'blur' }]
      },
      successName:'',
      formLabelWidth: "120px"
    };
  },
  mounted(){
    this.initData(),
    this.$http('/users/checkLogin').then(res=>{
      if(res.data.code==200){
        this.successName = res.data.result
      }else{
        this.$message({
          message:"未登录",
          duration:1000,
          type:"warning"
        })
      }
    })
  },
  methods:{
    handlePrice(gt, lt) {
      // console.log(gt, lt);
      this.$http({
        url: "/goods/price",
        method: "get",
        params: {
          gt,
          lt
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.goodsList = res.data.result;
          this.total = 10;
        }else{
          this.goodsList = [];
          this.$message({
            duration:1000,
            message:res.data.msg,
            type: 'warning'
          })
        }
      });
    },
    initData(){
      this.$http
      .get('/goods/list',{
        params:{start:this.start,limit:this.limit}}
        )
        .then(res=>{
        if(res.data.code==200){
          this.goodsList  = res.data.result;
          console.log(res.data.result)
          this.total = Math.ceil(res.data.total/this.limit)*10;
        }
      })
    },
    getPage(page){
      this.start = (page-1)*this.limit;
      this.initData();
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
    handleDefault(){
      this.initData()
    },
    addCart(productId){
      console.log(productId)
      this.$http({
        method:"post",
        url:'/users/addCart',
        data:{
          productId
        }
      }).then(res=>{
        console.log(res.data.msg)
        this.$message({
          message:res.data.msg,
          duration:1000,
          type:"success"
        })
      })
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
          this.successName = ''
      })
    }
  },
  /* 路由守卫 */
  beforeRouteLeave(to,from,next){
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
}
</script>
<style scoped>
  .wrap{
    width: 100%;
  }
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .logo{
    width: 50px;
    height: 60px;
    margin-left: 120px;
  }
  .btn{
    margin-right: 120px;
  }
  .successName{
    color: #eb7070;
    margin-right: 12px;
  }
  .login,
  .logout{
    background-color: #fff;
    color: #333;
    margin-right: 12px;
  }
  .login input{
    width: 260px;
    height: 32px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    outline: none;
    padding-left: 20px;
    margin-left:12px;
  }
  .logout{
    margin-left: 14px;
    cursor: pointer;
  }
  .el-icon-shopping-cart-full{
    font-size: 24px;
    color: brown;
  }
  .title{
    text-align: left;
    padding-left: 120px;
    background-color: #F5F7FC;
    position: relative;
  }
  .sort{
    position: absolute;
    right: 138px;
    top: 40px;
  }
  .sort span{
    padding: 0 8px;
  }
  .sort span:first-child{
    color: orangered;
  }
  .index{
    padding-top: 12px;
  }
  .detail{
    color: #666;
    margin-left: 10px;
  }
  .search{
    width: 1060px;
    height: 30px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    padding-left: 20px;
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
    width: 1000px;
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
    color: brown;
    margin-left: 16px;
  }
  .addCart{
    color: brown;
    border: 1px solid brown;
    background-color: #fff;
    outline:none;
    width: 180px;
    height: 40px;
    margin-bottom: 20px;
  }
  .addCart:hover{
    color: #fff;
    background-color: #eb7070;
    border: none;
  }
  .noData{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .search-content{
    margin-bottom: 20px;
  }
</style>