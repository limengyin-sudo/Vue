<template>
    <div class="content">
        <van-loading class="loading" v-if="this.$store.state.isLoading" 
        size="38px">数据加载中...</van-loading>
        <div v-for="(val,index) of subjects" :key="index">
            <router-link :to="'/detail/'+val.id">
                <item :data="val"></item>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Item from './components/Item'
    export default {
        name:"DRouting",
        components:{
            Item
        },
        data(){
            return {
                subjects:[],
                start:0
            }
        },
        mounted(){
            this.axios.get("v2/movie/top250").then(res=>{
                // console.log(res.data.subjects)
                this.subjects = res.data.subjects
            })
        },
        created(){
            function getWindowHeight() {
                return document.documentElement.clientHeight;
            }
            function getScrollHeight() {
                return Math.max(document.documentElement.scrollTop,window.pageYOffset||0)
            }
            function getDocumentTop() {
                return document.documentElement.offsetHeight;
            }
            this.subjects = Array.from(Object(20),(item,index)=>index)
            window.addEventListener('scroll',()=>{
                let isBottom = (getScrollHeight() +  getWindowHeight()) >=  getDocumentTop()
                if(isBottom){
                    console.log('触底了')
                    var length = this.subjects.length;
                    this.axios.get(`v2/movie/top250?start=${length}`).then(res=>{
                        console.log(res.data.subjects)
                        this.subjects = [...this.subjects,...res.data.subjects]
                    })
                }
            })
        },
        methods:{
           
        }
    }
</script>

<style lang="less" scoped>
    .content{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        place-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
    }
    .content>div{
        margin-top: 30px;
    }
    .loading{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30px;
    }
</style>