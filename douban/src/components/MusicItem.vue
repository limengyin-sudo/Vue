<template>
    <div class="wrap" @click="handleItem(data.id)">
        <div class="playCount">
            <slot name="icon"></slot>
            <p class="count">{{data.playCount | formatCount()}}</p>
        </div>
        <img class="cover" :src="data.coverImgUrl" alt="">
        <p class="name">{{data.name | formatName()}}</p>
    </div>
</template>

<script>
    export default {
        name:"MusicItem",
        props:{
            data:{
                type:Object
            }
        },
        methods:{
            handleItem(id){
                this.$router.push(`/musicList?id=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap{
        position: relative;
        margin-top: 18px;
    }
    .cover{
        width: 220px;
        height: 220px;
    }
    .playCount{
        position: absolute;
        width: 220px;
        height: 50px;
        line-height: 50px;
        color: antiquewhite;
        background-color: rgba(0,0,0,.6);
        display: flex;
    }
    .name{
        margin-top: 10px;
        color: #333;
        font-size: 32px;
    }
</style>