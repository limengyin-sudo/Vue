<template>
    <div class="container">
        <div v-for="(item,index) of artists" :key="item.id" 
        :class="(index+1)%2==0?'border':''" @click="handleClick(index)">
            <item :data="item"></item>
        </div>
    </div>
</template>

<script>
import Item from '../../components/Item'
export default {
    name:'All',
    data(){
        return {
            artists:[]
        }
    },
    components:{
        Item
    },
    mounted(){
        this.axios.get("/top/artists").then(res=>{
            var artists = []
            res.data.artists.forEach(item=>{
                var obj = {}
                obj.id = item.id;
                obj.coverImgUrl = item.picUrl;
                obj.name = item.name;
                artists.push(obj)
            })
            this.artists = artists;
        })
    },
    methods:{
        handleClick(index){
            // console.log(index)
            this.artists.splice(index,1)
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
    .border{
        border: 3px solid orange;
    }
</style>