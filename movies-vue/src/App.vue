<template>
  <div id="app">
    <MovieItem :data="item" v-for="item of movies" :key="item.id"></MovieItem>
  </div>
</template>
<script>
import axios from 'axios-jsonp-pro'
import MovieItem from './components/item'
export default {
  name: 'app',
  data(){
    return {
      movies:[]
    };
  },
  components: {
    MovieItem
  },
  mounted(){
    var url = 'https://douban.uieee.com/v2/movie/top250';
    axios.jsonp(url).then(res=>{
      this.movies = res.subjects;
    })
  }
}
</script>
<style>
  #app{
    width: 1000px;
    margin: 0 auto;
  }
</style>