<template>
    <div class="container">
        <i class="iconfont icon-fanhui" @click="toggle"></i>
        <div class="item" v-for="(item,index) of playlist" :key="item.id"
        :class="(index+1)%2==0?'bg':''">
            <img class="cover" :src="item.al.picUrl" alt="">
            <div class="detail">
                <p class="name">{{item.name|format()}}</p>
                <p class="alName">{{item.al.name|format()}}</p>
            </div>
            <p class="dt">{{item.dt|formatTime()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MusicDetail",
        data(){
            return {
               playlist:[]
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            },
        },
        methods:{
            toggle(){
                this.$router.back();
            }
        },
        mounted(){
            console.log(this.id)
            this.axios.get(`/playlist/detail?id=${this.id}`).then(res=>{
                this.playlist = res.data.playlist.tracks;
                // console.log(res.data.playlist.tracks)
            })
        }
    }
</script>

<style lang="less" scoped>
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        min-height: 100%;
        background: #fff;
    }
    .cover{
        width: 100px;
        height: 100px;
        padding: 20px;
    }
    .item{
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #eee;
    }
    .detail{
        width: 180px;
        font-size: 28px;
    }
    .item>p{
        font-size: 24px;
        color: #333;
    }
    .alName{
        font-size: 22px;
        color: #666;
        margin-top: 10px;
    }
    .dt{
        position: absolute;
        right: 10px;
    }
    .icon-fanhui{
        font-size: 40px;
        margin-top: 10px;
        display: block;
        padding: 20px;
    }
    .bg{
        background-color: pink;
    }
</style>