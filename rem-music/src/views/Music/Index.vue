<template>
    <div class="container">
        <div v-for="value of playlists" :key="value.id" 
        @click="handleItem(value.id)">
            <div class="listen-wrap">
                <img src="../../../images/Listen.png" alt="" slot="icon" class="listen">
                <p class="count">{{value.playCount|formatCount()}}</p>
            </div>
            <item :data="value">
                
            </item>
        </div>
    </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
        name:'Music',
        data(){
            return {
                playlists:[]
            }
        },
        components:{
            Item
        },
        methods:{
            handleItem(id){
                console.log(id)
                this.$router.push(`/MusicDetail?id=${id}`)
            },
        },
        mounted(){
            this.axios.get("/top/playlist?cat=华语").then(res=>{
                this.playlists = res.data.playlists;
            })
        }
    }
</script>

<style lang="less" scoped>
    .container{
        text-align: center;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:30px 10px;
        justify-content: space-evenly;
    }
    .listen-wrap{
        position: absolute;
        width: 200px;
        height: 40px;
        background-color: rgba(0,0,0,.6);
        z-index: 2;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .listen{
        width: 30px;
        height: 30px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .count{
        color: #fff;
    }
</style>