<template>
    <div>
        <div class="item" v-for="item of list" :key="item.id">
            <van-checkbox class="check" v-model="item.isSelected" checked-color="#07c160"></van-checkbox>
            <van-card
            :num="item.productCount"
            :price="item.productPrice"
            :desc="item.productInfo"  
            :title="item.productName"
            :thumb="item.productCover"
            />
            <p class="mul">小计：￥{{item.productPrice*item.productCount | format(2)}}</p>
            <van-stepper class="step" v-model="item.productCount" />
            <button class="delete" @click="toggle">删除</button>
        </div>
        <div>
            <van-submit-bar :data="item" class="submit-bar" 
            :price="sum" button-text="提交订单" v-for="item of list" :key="item.id">
                <van-checkbox v-model="checkAll">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <modal v-show="isShow" @del="handleDelete" />
    </div>
</template>

<script>
    import Modal from './components/Modal'
    export default {
        name:'Cart',
        data(){
            return {
                list:[],
                isShow:false
            }
        },
        components:{
            Modal
        },
        mounted(){
            this.axios.get('http://yapi.demo.qunar.com/mock/36046/cart').then(res=>{
                // console.log(res.data)
                this.list = res.data;
            })
        },
        filters:{
            format(val,params){
                return "$"+val.toFixed(params);
            }
        },
        computed:{
            checkAll:{
                get(){
                    return this.list.every(item=>item.isSelected)
                },
                set(val){
                    console.log(val)
                    this.list.forEach(item=>item.isSelected = val)
                }
            },
            sum(){
                var total = 0;
                this.list.forEach(item=>{
                    if(item.isSelected){
                        total = (item.productCount*item.productPrice)*100+total;
                    }
                })
                return total;
            }
            
        },
        methods:{
            toggle(){
                this.isShow = true;
            },
            handleDelete(){
                this.isShow = false
            }
            // handleDelete(index){
            //     console.log(index)
            //     this.list.splice(index,1)
            // }
        }
    }
</script>

<style lang="less" scoped>
    .item{
        width: 10rem;
        position: relative;
        border-radius: 12px;
        margin-top: 20px;
    }
    .check{
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
    }
    .mul{
        position: absolute;
        left: 114px;
        bottom: 20px;
        color: brown;
        font-size: 14px;
    }
    .step{
        position: absolute;
        right: 10px;
        bottom: 12px;
    }
    .delete{
        width: 36px;
        height: 16px;
        position: absolute;
        font-size: 10px;
        color: #fff;
        background-color: #e62e2d;
        border: none;
        border-radius: 3px;
        top: 10px;
        right: 10px;
    }
    .submit-bar{
        position: fixed;
        bottom: 60px;
    }
</style>