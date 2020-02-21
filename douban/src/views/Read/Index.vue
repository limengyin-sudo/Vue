<template>
    <div>
        <div class="banners">
             <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(val,index) of images" :key="index">
                    <img class="photo" :src="val" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="content" v-for="item of list" :key="item.postId" 
        @click="handleItem(item.postId)">
            <div class="head">
                <img class="avatar" :src="item.avatar" alt="">
                <div class="author-date">
                    <p class="author">{{item.author}}</p>
                    <p class="date">{{item.date}}</p>
                </div>
            </div>
            <p class="title">{{item.title}}</p>
            <img class="pic" :src="item.imgSrc" alt="">
            <p class="detail">{{item.detail | format()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Read",
        data(){
            return {
                list:[],
                images:[
                    'http://p1.music.126.net/V4Ti07-73oInFAP_eR67kA==/109951164514501849.jpg?imageView&quality=89',
                    'http://p1.music.126.net/gP9CZztmBED2A29BBqPFOA==/109951164514499657.jpg?imageView&quality=89',
                    'http://p1.music.126.net/Z-j-2EnhTWNnGNQmmkpWWg==/109951164515830332.jpg?imageView&quality=89'
                ]
            }
        },
        mounted() {
            this.axios.get("http://yapi.demo.qunar.com/mock/36046/read").then(res=>{
                // console.log(res.data)
                this.list = res.data
            })
        },
        methods:{
            handleItem(postId){
                console.log(postId)
                this.$router.push(`/listDetail?postId=${postId}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .banners{
        margin-bottom: 20px;
    }
    .photo{
        width: 750px;
        height: 440px;
    }
    .content{
        padding: 10px;
    }
    .head{
        display: flex;
        align-items: center;
    }
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .author{
        font-size: 40px;
        margin-bottom: 12px;
        color: #333;
    }
    .date{
        color: #666;
        font-size: 28px;
    }
    .pic{
        width: 99%;
        height: 440px;
    }
    .title,
    .detail,
    .author-date{
        text-align: left;
    }
    .title{
        font-size: 42px;
        color: #333;
        font-weight: 700;
        margin-top: 12px;
        margin-bottom: 12px;
        line-height: 60px;
    }
    .detail{
        font-size: 38px;
        color: #333;
        line-height: 56px;
    }
</style>