<template>
    <div>
        <div class="container">
            <div class="bg">
                <img :src="subject.images.small">
            </div>
            <div class="blur"></div>
            <div class="basic-intro">
                <p class="title">{{subject.title}}</p>
                <p class="location-year">{{subject.countries[0]}} ·{{subject.year}}</p>
                <div class="number">
                    <span class="count">{{subject.collect_count}}<span class="like">人喜欢</span></span>
                    <span class="count">{{subject.ratings_count}}<span class="info">条评论</span></span>
                </div>
                <img class="cover" :src="subject.images.small">
            </div>
            <div class="detail">
                <p class="detail-title">{{subject.title}}</p>
                <div class="score-star">
                    <p>评分<span>{{subject.rating.average}}</span></p>
                </div>
                <p class="direct-name">导演:{{subject.directors[0].name}}</p>
                <p class="label-actor">影人:<span class="cast" v-for="(val,index) of subject.casts" 
                :key="index">{{val.name}}</span></p>
                <div class="type">
                    <p class="label">类型:</p>
                    <p class="genres" v-for="(val,index) of subject.genres" 
                    :key="index">{{val}}</p>
                </div>
            </div>
            <div class="brief-intro">
                <p class="intro-title">剧情简介:</p>
                <p class="summary">{{subject.summary}}</p>
            </div>
            <div class="imgs">
                <p class="actor-people">影人</p>
                <div class="images">
                    <div v-for="(val,index) of subject.casts" :key="index">
                        <img class="img" :src="val.avatars.small">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MovieDetail",
        data(){
            return {
                subject:[]
            }
        },
        computed:{
            id(){
                return this.$route.query.id;
            }
        },
        mounted() {
            var id = this.id
            this.axios.get(`https://douban.uieee.com/v2/movie/subject/${id}`).then(res=>{
                console.log(res.data)
                this.subject = res.data;
            })
        },
    }
</script>

<style lang="less" scoped>
    .bg{
        width: 100%;
        height: 440px;
        position: relative;
        overflow: hidden;
    }
    .bg>img{
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .blur{
        position: absolute;
        width: 100%;
        height: 440px;
        background-color: rgba(0,0,0,.3);
        left: 0;
        top: 0;
        backdrop-filter: blur(8px);
    }
    .basic-intro{
        width: 100%;
        height: 420px;
        position: absolute;
        left: 0;
        top: 20px;
        text-align: left;
    }
    .location-year,
    .number{
        margin-top: 50px;
        margin-left: 30px;
    }
    .title{
        margin-top: 80px;
        margin-left: 30px;
        font-size: 56px;
        font-weight: bold;
        color: cornsilk;
    }
    .location-year{
        color: cornsilk;
        font-size: 36px;
    }
    .number{
        font-size: 32px;
        color: cornsilk;
    }
    .count{
        color: #f09c67;
        margin-right: 10px;
    }
    .like,
    .info{
        color: #666;
        margin-right: 20px;
    }
    .cover{
        width: 190px;
        height: 280px;
        position: absolute;
        right: 30px;
        bottom: -120px;
        border-radius: 6px;
    }
    .detail{
        width: 100%;
        color: #666;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 30px;
        text-align: left;
    }
    .detail-title,
    .score-star,
    .direct-name,
    .label-actor,
    .cast,
    .type{
        margin-left: 20px;
        line-height: 80px;
        font-size: 34px;
    }
    .detail-title{
        font-size: 40px;
        color: #333;
    }
    .star{
        width: 36px;
        height: 36px;
    }
    .direct-name{
        display: block;
    }
    .type{
        display: flex;
    }
    .genres{
        margin-left: 10px;
        margin-right: 10px;
    }
    .brief-intro{
        margin-top: 40px;
        padding-bottom: 30px;
        border-bottom: 1px solid #e0e0e0;
        text-align: left;
        padding: 10px;
    }
    .intro-title{
        color: #333;
        font-size: 38px;
        margin-bottom: 16px;
    }
    .summary{
        text-indent: 2em;
        font-size: 32px;
        color: #333;
        line-height: 64px;
    }
    .imgs{
        text-align: left;
    }
    .actor-people{
        padding: 20px;
        color: #333;
        font-size: 34px;
    }
    .images{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .img{
        width: 180px;
        height: 260px;
        margin-right: 20px;
        border-radius: 6px;
    }
</style>