<template>
    <div>
        <div class="content">
            <div class="head">
                <img :src="data.image" alt="">
                <p class="username">{{data.username}}</p>
            </div>
            <div class="con">
                <p class="title">{{data.article_title}}</p>
                <img class="cover" :src="data.collect_img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Item",
         props:{
            data:{
                type:Object,
                required:true
            }
        },
    }
</script>

<style scoped>
    .head{
        width: 100%;
        display: flex;
        padding: 20px;
    }
    .head img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .username{
        font-size: 16px;
        color: #333;
        margin-top: 10px;
    }
    .title{
        font-size: 18px;
        color: #333;
        text-align: left;
        margin-left: 20px;
    }
    .con{
        position: relative;
    }
    .cover{
        width: 340px;
        margin-top: 8px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    .content{
        width: 100%;
        margin-top: 10px;
        border-bottom: 1px solid #e0e0e0;
    }
</style>