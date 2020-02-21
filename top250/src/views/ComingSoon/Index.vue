<template>
    <div>
        <van-loading class="loading" v-if="this.$store.state.isLoading" 
        size="38px">数据加载中...</van-loading> 
        <div v-for="val of subjects" :key="val.id">
            <item :data="val">
                
            </item>
        </div>
    </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
        name:"ComingSoon",
        data(){
            return {
                subjects:[]
            }
        },
        components:{
            Item
        },
        mounted(){
            this.axios.get("v2/movie/coming_soon").then(res=>{
                // console.log(res.data.subjects)
                var data = res.data.subjects
                this.subjects = data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .loading{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 520px;
    }
</style>