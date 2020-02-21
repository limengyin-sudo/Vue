<template>
    <div>
        <div v-for="item of list" :key="item.id">
            <user :data="item"></user>
        </div>
    </div>
</template>

<script>
    import User from './components/User'
    export default {
        name:'TangDetail',
        data(){
            return {
                list:[]
            }
        },
        components:{
            User
        },
        computed:{
            id(){
                return this.$route.query.id
            }
        },
        mounted(){
            console.log(this.id)
            var id = this.id;
            this.axios.get(`index/userDetail?id=${id}`).then(res=>{
                this.list = res.data;
                console.log(res.data)
            })
        }
    }
</script>

<style lang="less" scoped>
    .head{
        width: 10rem;
        position: relative;
    }
    .cover{
        width: 100%;
    }
    .fav-count{
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #fff;
    }
    .detail{
        position: absolute;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.7rem;
    }
    .user{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .name{
        font-size: 18px;
        color: #333;
        margin-top: 6px;
    }
</style>