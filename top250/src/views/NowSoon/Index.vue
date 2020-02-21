<template>
    <div>
        <div class="content">
            <div class="nav" :style="{opacity:opacity}">
                <div><van-icon class="head-icon" name="arrow-left" @click="toggle" /></div>
                <p class="head-title">{{info.title}}</p>
            </div>
            <div class="pic">
                <img :src="info.images.small" alt="">
                <div><van-icon class="icon" name="arrow-left" @click="toggle" /></div>
            </div>
            <div class="detail">
                <p class="title">{{info.title}}</p>
                <span v-for="tag of info.tags" :key="tag" class="tag">{{tag}}</span>
                <p class="time">{{info.mainland_pubdate}}上映</p>
                <p class="country">{{info.countries}}</p>
                <p class="summary">{{info.summary}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NowSoon",
        data(){
            return {
                info:[],
                opacity: 0
            }
        },
        computed:{
            id(){
                return this.$route.query.id;
            }
        },
        mounted(){
            window.addEventListener("scroll",this.handle)
            console.log(this.id)
            this.axios.get(`v2/movie/subject/${this.id}`).then(res=>{
                this.info = res.data;
                console.log(res.data)
            })
        },
        methods:{
            toggle(){
                this.$router.back();
            },
            handle(){
                var height = document.documentElement.scrollTop;
                /* 到达300完全显示 */
                var opacity = height/200;
                if(opacity>1){
                    opacity = 1;
                }
                this.opacity = opacity;
                // console.log(opacity)
            }
        }
    }
</script>

<style lang="less" scoped>
    .content{
        width: 100%;
        height: 2000px;
        position: relative;
    }
    .nav{
        width: 100%;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 5;
        background-color: #fff;
    }
    .head-title{
        position: absolute;
        left:50%;
        top: 0;
        transform: translateX(-50%);
        font-size: 28px;
    }
    .head-icon{
        font-size: 46px;
        margin: 18px;
        color: #333;
    }
    .pic{
        width: 100%;
        height: 420px;
        background-color: #eb7070;
        overflow: hidden;
        position: relative;
    }
    .pic img{
        width: 100%;
        position: absolute;
        left: 50%;
        top: 48%;
        transform: translate(-50%,-50%);
    }
    .icon{
        z-index: 2;
        color: #fff;
        font-size: 46px;
        margin: 18px;
    }
    .detail{
        padding: 18px;
    }
    .detail p{
        margin: 0;
        line-height: 60px;
    }
    .title{
        font-size: 34px;
    }
    .tag,
    .time,
    .country{
        margin: 4px;
        color: #666;
    }
    .detail .summary{
        font-size: 28px;
        line-height: 56px;
        color: #333;
    }
</style>