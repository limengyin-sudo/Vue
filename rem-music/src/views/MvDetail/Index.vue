<template>
    <div class="container">
        <div v-for="item of url" :key="item.id">
            <video :src="item.url" controls></video>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MvDetail",
        data(){
            return{
                url:[]
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            },
        },
        mounted(){
            console.log(this.id)
            this.axios.get(`/mv/url?id=${this.id}`).then(res=>{
                this.url = res.data;
                console.log(res.data)
            })
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 10rem;
        min-height: 100%;
        background-color: #eee;
    }
    video{
        width: 10rem;
        position: fixed;
    }
</style>