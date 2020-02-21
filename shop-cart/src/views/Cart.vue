<template>
    <div class="wrap">
        <h2 class="title">我的购物车</h2>
        <table>
            <thead>
                <tr>
                    <th>选择</th>
                    <th>商品</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of cartList" :key="item.productId">
                    <td>
                        <van-checkbox @change="onChange(item)" checked-color="#FF6700" v-model="item.checked"></van-checkbox>
                    </td>
                    <td class="img-name">
                        <img :src="item.productImage" />
                        <span>{{item.productName}}</span>
                    </td>
                    <td>
                        <van-stepper @change="onChange(item)" v-model="item.productNum" integer />
                    </td>
                    <td>
                        <span>￥{{item.salePrice}}</span>
                    </td>
                    <td>￥{{(item.productNum)*(item.salePrice)}}</td>
                    <td>
                        <el-button type="danger" @click="handleCartDel(item.productId)">删除</el-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <van-submit-bar :price="sum" button-text="提交订单" :disabled="sum?false:true">
            <van-checkbox v-model="checkAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        name:"Cart",
        data(){
            return {
                cartList: []
            }
        },
        methods:{
            initData(){
                this.$http("/users/cartList").then(res => {
                    this.cartList = res.data.result;
                    console.log(this.cartList)
                });
            },
            handleCartDel(productId){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('/users/cartList/del',{
                        productId
                    }).then(res=>{
                        console.log(res.data)
                        this.initData()
                    });
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
            async onChange(item){
                var {productId,productNum,checked} = item;
                this.$http.post('/users/cartList/edit',{
                    productId,
                    productNum,
                    checked
                })
            }
        },
        mounted(){
            this.initData()
        },
        computed:{
            checkAll:{
                get() {
                    return this.cartList.every(item => item.checked);
                },
                set(val) {
                    //给checkbox赋值的时候触发
                    this.cartList.forEach(item => (item.checked = val));
                }
            },
            sum() {
                /* sum的值会被缓存,如果依赖的数据没有变化不会重新执行 */
                var total = 0;
                this.cartList.forEach(item => {
                    if (item.checked) {
                        total = item["productNum"] * item["salePrice"] + total;
                    }
                });
                return total * 100;
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #F5F7FC;
    }
    .title {
        text-align: center;
        line-height: 30px;
    }
    table .van-checkbox {
        margin-left: 20px;
    }
    table {
        background: #fff;
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 15px;
        margin: 0 auto;
        /* display: block; */
        text-align: center;
    }
    table img {
        width: 100px;
    }
    table th {
        text-align: center;
    }
    .about > .van-submit-bar {
        padding: 0 20px;
    }
    .about .van-checkbox__icon .van-icon {
        border-color: #ff6700 !important;
    }
    table .van-stepper .van-stepper__input {
        width: 40px !important;
    }
    thead {
        background: #333;
        color: #fff;
        line-height: 50px;
    }
    tbody tr {
        line-height: 120px;
    }
    table td{
        width: 300px;
    }
    .img-name{
        display: flex;
    }
</style>