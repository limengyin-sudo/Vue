<template>
    <div>
        <img class="small" :src="data.images.small" alt="">
        <p class="title">{{data.title|format()}}</p>
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

<style lang="less" scoped>
    .small{
        width: 200px;
        height: 304px;
    }
    .title{
        font-size: 30px;
        color: #333;
    }
</style>