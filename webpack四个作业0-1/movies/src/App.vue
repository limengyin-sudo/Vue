<template>
    <div class="container">
        <div v-for="item of movies" :key="item.id">
            <img :src="item.images.small" alt="" />
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    data(){
        return{
            movies:[]
        }
    },
    mounted(){
        var url = "https://douban.uieee.com/v2/movie/top250"
        axios.get(url).then(res=>{
            this.movies = res.data.subjects
            console.log(this.movies)
        })
    }
}
</script>

<style scope>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .container>div{
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, .3);
        margin-top: 30px;
    }
    img{
        width: 280px;
        height: 400px;
    }
    p{
        font-size: 15px;
        color: #333;
    }
</style>