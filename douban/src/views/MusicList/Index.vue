<template>
    <div>
        <div class="container">
            <div class="coverImg">
                <img :src="coverImgUrl">
            </div>
            <div class="list">播放列表</div>
            <div class="item" v-for="item of playlist" :key="item.id">
                <div class="listCover">
                    <div><img class="coverPic" :src="item.coverImage"></div>
                    <p class="name">{{item.name | formatList()}}</p>
                </div>
                <img class="playIcon"  @click="handlePlay(item.id,item.coverImage,item.name)" 
                src="../../images/icon/pause.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MusicList",
        computed:{
            id(){
                return this.$route.query.id;
            }
        },
        data(){
            return {
                playlist:'',
                coverImgUrl: ""
            }
        },
        mounted() {
            this.axios.get(`https://music.aityp.com/playlist/detail?id=${this.id}`).then(res=>{
                // console.log(res.data.playlist.tracks)
                var songs = []
                res.data.playlist.tracks.forEach(item=>{
                    var obj = {}
                    obj.id = item.id;
                    obj.coverImage = item.al.picUrl;
                    obj.name = item.al.name;
                    songs.push(obj)
                    // console.log(songs)
                })
                this.playlist = songs
                this.coverImgUrl = res.data.playlist.coverImgUrl
            })
        },
        methods:{
            handlePlay(id,coverImage,name){
                this.$router.push(`/musicPlay?id=${id}&coverImage=${coverImage}&name=${name}`)
                // console.log(id)
                // console.log(coverImage)
                // console.log(name)
            }
        }
    }
</script>

<style lang="less" scoped>
    .coverImg{
        width: 100%;
        height: 420px;
        vertical-align: bottom;
        overflow: hidden;
        position: relative;
    }
    .coverImg img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .list{
        background: #eee;
        font-size: 36px;
        color: #333;
        line-height: 80px;
        text-align: left;
        padding-left: 20px;
    }
    .item{
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
    }
    .listCover{
        display: flex;
        align-items: center;
    }
    .coverPic{
        width: 100px;
        height: 100px;
    }
    .name{
        font-size: 30px;
        color: #333;
        margin-left: 30px;
    }
    .playIcon{
        width: 60px;
        height: 60px;
    }
</style>