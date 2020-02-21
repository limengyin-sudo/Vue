<template>
    <div class="container">
        <img class="pic" :src="info.images.small" alt="">
        <p class="title">{{info.title}}</p>
        <p class="summary">{{info.summary}}</p>
    </div>
</template>

<script>
    export default {
        name:"Detail",
        data(){
            return {
                info:[]
            }
        },
        mounted(){
            var id = this.$route.params.id;
            // console.log(id)
            this.axios.get(`v2/movie/subject/${id}`).then(res=>{    
                // console.log(res.data)
                this.info = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 100%;
        text-align: center;
    }
    .pic{
        width: 300px;
        margin-top: 30px;
    }
    .title{
        font-size: 40px;
        color: #333;
    }
    .summary{
        text-indent: 2em;
        line-height: 60px;
        padding: 14px;
        color: #333;
    }
</style>