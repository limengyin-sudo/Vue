<template>
    <div>
        <div class="content">
            <div class="head">
                <img class="avatar" :src="data.avatar" alt="" />
                <div class="detail">
                    <p class="username">{{data.username}}</p>
                    <p class="type">{{data.publish_time}}</p>
                </div>
            </div>
            <p class="desc">{{data.desc}}</p>
            <div class="pic">
                <div v-for="img of data.images" :key="img" @click="handleCover(data.id)">
                    <img :src="img" alt="" />
                </div>
            </div>
            <div class="bottom">
                <p class="like">点赞{{data.like_action}}</p>
                <p class="fav">收藏{{data.favorite_action}}</p>
                <p class="more">···{{data.more_action}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Item',
        props:{
            data:{
                type:Object,
                required:true
            }
        },
        methods:{
            handleCover(id){
                console.log(id)
                this.$router.push(`/TangDetail?id=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .content{
        border-bottom: 1px solid #e0e0e0;
    }
    .head{
        display: flex;
        padding: 10px;
        align-items: center;
        margin-top: 20px;
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
    .bottom{
        width: 10rem;
        height: 60px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        place-items: center;
        font-size: 18px;
        color: #333;
    }

</style>