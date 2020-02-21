<template>
    <div>
        <div class="container">
            <img class="bg" :src="coverImage" />
            <div class="bgCover"></div>
            <img class="shou" :class="isPlay?'play':'pause'" src="../../images/music/shou.png">
            <div class="circle">
                <img class="album" :class="isPlay?'running':'paused'" :src="coverImage" />
            </div>
            <p class="name">{{name}}</p>
            <img class="isPlay" @click="handleClick(isPlay)" 
            :src="require(isPlay?'../../images/music/play.png':'../../images/icon/pause.png')" alt="">
            <audio id="audio" :src="playUrl" controls></audio>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MusicPlay",
        data(){
            return {
                playUrl:"",
                isPlay:false
            }
        },
        computed:{
            id(){
                return this.$route.query.id;
            },
            coverImage(){
                return this.$route.query.coverImage;
            },
            name(){
                return this.$route.query.name;
            }
        },
        mounted() {
            this.axios.get(`https://music.aityp.com/song/url?id=${this.id}`).then(res=>{
                this.playUrl = res.data.data[0].url;
            })
        },
        methods:{
            handleClick(isPlay){
                var audio = document.querySelector('#audio')
                if(isPlay){
                    this.isPlay = false
                    audio.pause()
                }else{
                    this.isPlay = true
                    audio.play()
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .bg{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -3;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .bgCover{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.8);
        backdrop-filter: blur(8px);
        z-index: -2;
    }
    .shou{
        width: 222px;
        height: 366px;
        position: absolute;
        left: 40%;
        top: 20px;
        transform-origin: 60px 60px;
    }
    @keyframes play{
        0% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(-4deg);
        }
    }
    .play{
        animation: play 0.4s linear forwards;
    }
    @keyframes pause{
        0% {
            transform: rotate(-4deg);
        }
        100% {
            transform: rotate(-20deg);
        }
    }
    .pause{
        animation: pause 0.4s linear forwards;
    }
    .circle{
        width: 550px;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('https://i.loli.net/2019/09/12/ZlNXnRgBbjMT1VW.png') no-repeat center;
        background-size: 100% 100%;
        margin-top: 260px;
    }
    @keyframes circle{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .album{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        animation: circle 8s linear infinite;
    }
    .running{
        animation-play-state: running;
    }
    .paused{
        animation-play-state: paused;
    }
    .name{
        margin-top: 80px;
        margin-bottom: 50px;
        font-size: 30px;
        color: #eb7070;
    }
    .isPlay{
        width: 80px;
        height: 80px;
        margin-top: 60px;
    }
    #audio{
        display: none;
    }
</style>