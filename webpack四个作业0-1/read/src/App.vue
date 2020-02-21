<template>
    <div>
        <div v-for="item of books" :key="item.id">
            <img :src="item.images.small" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"App",
    data(){
        return{
            books:[]
        }
    },
    mounted(){
        var url = "https://douban.uieee.com/v2/book/search?q=你"
        axios.get(url).then(res=>{
            this.books = res.data.books
            console.log(this.books)
        })
    }
}
</script>

<style scope>
    
</style>