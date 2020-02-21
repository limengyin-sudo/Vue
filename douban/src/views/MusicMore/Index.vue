<template>
    <div class="content">
        <div v-for="(val,index) of musics" :key="index">
            <musicItem :data="val">
                <img class="countIcon" slot="icon" src="../../images/icon/p0.png" alt="">
            </musicItem>
        </div>
    </div>
</template>

<script>
    import MusicItem from "../../components/MusicItem"
    export default {
        name:"MusicMore",
        components:{
            MusicItem
        },
        computed: {
            subTitle() {
                return this.$route.query.subTitle;
            }
        },
        data(){
            return {
                musics:[]
            }
        },
        mounted() {
            var subTitle = this.subTitle;
            if(subTitle == 'personalized/djprogram'){
                this.axios
                .get(`https://music.aityp.com/${subTitle}`)
                .then(res => {
                    this.musics = res.data.result;
                    this.musics.every(item=>item.coverImgUrl=item.picUrl)
                    this.musics.every((item=>item.playCount = item.program.listenerCount))
                });
            }else{
                this.axios
                .get(`https://music.aityp.com/${subTitle}`)
                .then(res => {
                    this.musics = res.data.playlists;
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .countIcon{
        margin-left: 24px;
        margin-right: 16px;
    }
</style>