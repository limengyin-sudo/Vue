<template>
    <div>
        <van-loading class="loading" v-if="this.$store.state.isLoading" 
        size="38px">数据加载中...</van-loading> 
        <div v-for="val of subjects" :key="val.id" @click="handleItem(val.id)">
            <item :data="val">
                <p slot="sell" class="sell">购票</p>
            </item>
        </div>
    </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
        name:"NowPlaying",
        components:{
            Item
        },
        data(){
            return {
                subjects:[]
            }
        },
        mounted(){
            this.axios.get("v2/movie/in_theaters").then(res=>{
                // console.log(res.data.subjects)
                var data = res.data.subjects
                this.subjects = data;
            })
        },
        methods:{
            handleItem(id){
                console.log(id)
                this.$router.push(`/nowsoon?id=${id}`)
            } 
        }
    }
</script>

<style lang="less" scoped>
    .sell{
        position: absolute;
        right: 58px;
        font-size: 20px;
        color: #ff6f16;
        padding: 10px;
        border: 1px solid #ff6f16;
        border-radius: 6px;
        top: 56px;
    }
    .loading{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 520px;
    }
</style>