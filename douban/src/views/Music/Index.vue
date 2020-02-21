<template>
    <div>
        <div class="container" v-for="(item,index) of musics" :key="index">
            <div class="title">
                <p>{{item.title}}</p>
                <p class="more" @click="handleMore(item.subTitle)">更多></p>
            </div>
            <div class="content-wrap">
                <div class="content" v-for="(val,index) of item.data" :key="index">
                    <musicItem :data="val">
                        <img class="countIcon" slot="icon" src="../../images/icon/p0.png" alt="">
                    </musicItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MusicItem from '../../components/MusicItem'
    export default {
        name:"Music",
        data(){
            return{
                musics:[]
            }
        },
        components:{
            MusicItem
        },
        mounted() {
            var musics = []
            this.axios.get("https://music.aityp.com/top/playlist?cat=欧美").then(res=>{
                var catEA = {}
                catEA.title="欧美";
                catEA.data = res.data.playlists.slice(0,3);
                catEA.subTitle = "top/playlist?cat=欧美";
                musics.push(catEA)
            })
            this.axios.get("https://music.aityp.com/top/playlist?order=hot").then(res=>{
                var hot = {}
                hot.title = "热门";
                hot.data = res.data.playlists.slice(0, 3);
                hot.subTitle = "top/playlist?order=hot";
                musics.push(hot)
            })
            this.axios.get("https://music.aityp.com/personalized/djprogram").then(res=>{
                var rec = {}
                rec.title = "推荐";
                // var recommend = []
                // res.data.result.forEach(item=>{
                //     var obj = {}
                //     obj.id = item.id;
                //     obj.coverImgUrl = item.picUrl;
                //     obj.name = item.name;
                //     obj.playCount = item.program.listenerCount;
                //     recommend.push(obj)
                // })
                // rec.data = recommend.slice(0,3)
                rec.data =  res.data.result.slice(0,3)
                res.data.result.every(item=>item.coverImgUrl = item.picUrl)
                res.data.result.every(item=>item.playCount = item.program.listenerCount)
                rec.subTitle = "personalized/djprogram";
                musics.push(rec)
            })
            this.musics = musics
            console.log(musics)
        },
        methods:{
            handleMore(subTitle){
                this.$router.push(`/musicMore?subTitle=${subTitle}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .title{
        display: flex;
        justify-content: space-between;
        padding: 16px;
        font-size: 34px;
        margin-top: 24px;
    }
    .content-wrap{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-top: 16px;
    }
    .countIcon{
        margin-left: 24px;
        margin-right: 16px;
    }
</style>