<template>
    <div class="item" @click="handleItem(data.id)">
        <img :src="data.images.small" alt="">
        <p class="name">{{data.title | formatName()}}</p>
        <p class="average"><van-rate v-model="value" size="16px"/>{{data.rating.average}}</p>
    </div>
</template>

<script>
    export default {
        name:"Item",
        props:{
            data:{
                type:Object
            },
            value:{
                type:Number
            }
        },
        methods:{
            handleItem(id){
                this.$router.push(`/movieDetail?id=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .item img{
        width: 210px;
        height: 290px;
        border-radius: 4px;
    }
    .name{
        font-size: 30px;
        color: #333;
    }
    .average{
        color: brown;
        margin-top: 12px;
    }
</style>