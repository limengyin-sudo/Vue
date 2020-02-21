<template>
    <div>
        <div class="content">
            <div class="head-content">
                <img class="avatar" :src="data.avatarImg" alt="" />
                <div class="detail">
                    <p class="username">{{data.peopleName}}</p>
                    <p class="type">{{data.create}}</p>
                </div>
            </div>
            <p class="desc">{{data.desc}}</p>
            <div class="pic">
                <div v-for="img of data.images" :key="img">
                    <img :src="img" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"User",
        props:{
            data:{
                type:Object,
                required:true
            }
        },
    }
</script>

<style lang="less" scoped>
    .head-content{
        display: flex;
        padding: 10px;
        align-items: center;
    }
    .avatar{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    .detail{
        margin-left: 10px;
    }
    .username{
        font-size: 18px;
    }
    .type{
        font-size: 16px;
        color: #666;
        margin-top: 6px;
    }
    .desc{
        font-size: 20px;
        color: #333;
        padding: 10px;
        line-height: 36px;
    }
    .pic{
        width: 10rem;
        display: grid;
        grid-template-columns: repeat(3,108px);
        justify-content: center;
        gap: 14px;
    }
    .pic img{
        width: 108px;
        height: 108px;
        border-radius: 6px;
    }
</style>