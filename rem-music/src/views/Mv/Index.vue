<template>
    <div class="container">
        <div v-for="item of mvs" :key="item.id" 
        @click="handleClick(item.id)">
            <item :data="item"></item>
        </div>
    </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
        name:'Mv',
        data(){
            return {
                mvs:[]
            }
        },
        components:{
            Item
        },
        mounted(){
            this.axios.get("/mv/first").then(res=>{
                console.log(res.data)
                var mvs = []
                res.data.data.forEach(item=>{
                    var obj = {}
                    obj.id = item.id;
                    obj.coverImgUrl = item.cover;
                    obj.name = item.name;
                    mvs.push(obj)
                })
                this.mvs = mvs;
            })
        },
        methods:{
            handleClick(id){
                console.log(id)
                this.$router.push(`/MvDetail?id=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        text-align: center;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:30px 10px;
        justify-content: space-evenly;
    }
</style>