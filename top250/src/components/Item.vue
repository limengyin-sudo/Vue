<template>
    <div class="item">
        <img class="pic" :src="data.images.small" alt="" />
        <div class="info">
            <p class="title">{{data.title}}</p>
            <p class="star">评分：{{data.rating.average}}</p>
            <p class="cast">
                主演：<span v-for="cast of data.casts" :key="cast.id">{{cast.name | format()}}</span>
            </p>
            <p class="dt">{{data.durations[0]}}</p>
        </div>
        <slot name="sell"></slot>
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
        }
    }
</script>

<style lang="less" scoped>
    .item{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 18px;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
    }
    .pic{
        width: 120px;
        border-radius: 4px;
        margin-right: 10px;
    }
    .info{
        height: 140px;
        margin-top: -10px;
    }
    .info p{
        margin: 0;
        line-height: 40px;
    }
    .title{
        font-size: 30px;
    }
    .star,
    .cast,
    .dt{
        font-size: 24px;
        color: #666;
    }
</style>