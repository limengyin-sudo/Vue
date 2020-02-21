<template>
    <div>
        <div class="wrap">
            <slot name="icon"></slot>
            <img :src="data.coverImgUrl" />
            <p>{{data.name | format()}}</p>
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
        }
    }
</script>

<style lang="less" scoped>
    .wrap{
        position: relative;
    }
    img{
        width:200px;
        height: 200px;
    }
    p{
        font-size: 28px;
        color:#333;
    }
</style>