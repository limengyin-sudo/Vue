<template>
    <div>
        <p class="title">购物车</p>
        <table vlign="center">
            <thead>
                <tr>
                    <th>全选<input type="checkbox" v-model="checkAll"></th>
                    <th>商品</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of lists" :key="item.id" class="products">
                    <td>
                        <input type="checkbox" v-model="item.isSelected" />
                    </td>
                    <td class="book">
                        <img class="cover" :src="item.productCover" alt="" />
                        <p class="name">{{item.productName}}</p>
                    </td>
                    <td valign="center">
                        <span>{{item.productPrice}}</span>
                    </td>
                    <td>
                        <input class="count" type="number" v-model.number="item.productCount" min="1" />
                    </td>
                    <td class="mul">
                        {{item.productPrice*item.productCount}}
                    </td>
                    <td>
                        <van-button type="danger" @click="handleDelete(index)">删除</van-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <div v-for="(item,index) of lists" :key="index" class="list">
            <input type="checkbox"  v-model="item.isSelected"/>
            <img class="cover" :src="item.productCover" alt="" />
            <div class="name-info">
                <p class="name">{{item.productName}}</p>
                <p class="info">{{item.productInfo}}</p>
            </div>
            <p class="price">{{item.productPrice}}</p>
            <input class="count" type="number" v-model.number="item.productCount" min="1" />
            <p class="mul">{{item.productPrice*item.productCount}}</p>
            <van-button type="danger" @click="handleDelete(index)">删除</van-button>
        </div> -->
        <p class="total">总价:</p>
    </div>
</template>

<script>
    export default {
        name:'Music',
        data(){
            return {
                lists:[],
            }
        },
        mounted(){
            this.axios.get("http://yapi.demo.qunar.com/mock/36046/cart").then(res=>{
                this.lists = res.data;
                console.log(res.data)
            })
        },
        computed:{
            checkAll:{
                get(){
                    return this.lists.every(item=>item.isSelected)
                },
                set(val){
                    console.log(val)
                    this.lists.forEach(item=>item.isSelected = val)
                }
            },
            sum(){
                var total = 0;
                this.products.forEach(item=>{
                    if(item.isSelected){
                        total = item.productCount*item.productPrice+total;
                    }
                })
                return total;
            }
        },
        methods:{
            handleDelete(index){
                this.lists.splice(index,1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .title{
        font-size: 36px;
        color: #eb7070;
        text-align: center;
        margin-bottom: 20px;
    }
    .total{
        font-size: 22px;
        padding: 18px;
    }
    *{
        padding: 0;
        margin: 0;
    }
    .container{
        width: 10rem;
    }
    .list{
        display: flex;
        align-items: center;
        margin-top: 40px;
        padding: 10px;
    }
    .cover{
        width: 100px;
        height: 140px;
        margin-right: 16px;
        margin-left: 10px;
    }
    .name{
        font-size: 24px;
    }
    .count{
        width: 50px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        margin-left: 20px;
    }
    .mul{
        width: 80px;
        margin-left: 20px;
    }
    .book{
        width: 400px;
        display: flex;
        align-items: center;
    }
</style>