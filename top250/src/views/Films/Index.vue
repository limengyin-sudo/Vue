<template>
    <div class="container">
        <div class="banners">
            <div class="address" @click="handleAddress">
                <p>{{city}}</p>
                <van-icon name="arrow-down" />
            </div>
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) of images" :key="index">
                    <img :src="item" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="title">
            <router-link class="now" to="/films/nowPlaying">正在热映</router-link>
            <router-link class="soon" to="/films/comingSoon" >即将上映</router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name:"SWell",
        data(){
            return {
                images:[
                    'https://static.maizuo.com/v5/upload/13777d69b0b94fc99e78b1a467913296.jpg?x-oss-process=image/quality,Q_70',
                    'https://static.maizuo.com/v5/upload/044c29d00a2fad92adc62bcf24e44837.jpg?x-oss-process=image/quality,Q_70',
                    'https://static.maizuo.com/v5/upload/6dbadcf2e05692ee95f234215ebd0aad.jpg?x-oss-process=image/quality,Q_70',
                    'https://static.maizuo.com/v5/upload/d31fdf1d15375467130b5a52eff8a47a.jpg?x-oss-process=image/quality,Q_70'
                ],
            }
        },
        methods:{
            handleAddress(){
                this.$router.push('/city')
            }
        },
        computed:{
            city(){
                return this.$store.state.city;
            }
        },
        destroyed(){
            window.removeEventListener("scroll")
        },
    }
</script>

<style lang="less" scoped>
    .banners{
        width: 100%;
        position: relative;
        font-size: 0;
    }
    .banners img{
        width: 100%;
        height: 420px;
    }
    .address{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: rgba(0,0,0,.5);
        left: 18px;
        top: 18px;
        z-index: 2;
        color: #fff;
        font-size: 12px;
        width: 100px;
        height: 60px;
        border-radius: 34px;
    }
    .title{
        width: 100%;
        height: 90px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        place-items: center;
        background-color: #fff;
    }
    .now,
    .soon{
        color: #191a1b;
        line-height: 90px;
    }
    .title .router-link-exact-active{
        color: #ff5f16;
        border-bottom: 1px solid #ff5f16;
    }
</style>