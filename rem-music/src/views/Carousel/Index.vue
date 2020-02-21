<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) of swiperData" :key="index">
                <img :src="item" alt="" @click="swiperImgClick(index)">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name:"Carousel",
        data(){
            return {
                swiperData:[
                    'https://img.alicdn.com/tfs/TB1VtyymHr1gK0jSZFDXXb9yVXa-520-280.jpg_q90_.webp',
                    'https://img.alicdn.com/tfs/TB1njIumAP2gK0jSZPxXXacQpXa-520-280.jpg_q90_.webp',
                    'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg'
                ]
            }
        },
        methods:{
            swiperImgClick(){
                ImagePreview(this.swiperData)
            }
        }
    }
</script>

<style lang="less" scoped>
    img{
        width: 100%;
    }
</style>