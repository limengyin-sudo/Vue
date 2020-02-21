<template>
    <div class="container">
        <input class="kw" type="text" v-model="kw" @keyup.enter="handleKw" 
        placeholder="搜索感兴趣的内容" />
        <div class="content" v-for="val of list" :key="val.id">
            <item :data="val"></item>
        </div>
    </div>
</template>

<script>
    import Item from './components/Item'
    export default {
        name:"Search",
        data(){
            return {
                list:[],
                kw:''
            }
        },
        components:{
            Item
        },
        methods: {
            handleKw(){
                var kw = this.kw;
                this.axios.get(`search?kw=${kw}`).then(res=>{
                    console.log(res.data)
                    this.list = res.data
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        text-align: center;
    }
    .kw{
        width: 260px;
        height: 36px;
        border-radius: 8px;
        outline: none;
        border: 1px solid #eb7070;
        margin-top: 10px;
        padding-left: 20px;
        font-size: 16px;
        color: #333;
    }
</style>