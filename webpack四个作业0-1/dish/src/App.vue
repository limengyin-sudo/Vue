<template>
  <div class="container">
      <div class="item" v-for="item of albums" :key="item.id">
          <img :src="item.picUrl" alt="">
          <p class="name">{{item.name}}</p>
          <p class="artist">{{item.artist.name}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data(){
    return {
      albums:[]
    }
  },
  mounted() {
    var url = "https://music.aityp.com/top/album";
    axios.get(url).then(res=>{
        this.albums = res.data.albums
    })
  }
};
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .item{
        margin-top: 20px;
    }
    img{
        width: 300px;
        height: 300px;
        border: 1px solid #e0e0e0;
        padding: 20px;
    }
    .name{
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .artist{
        font-size: 12px;
        color: #666;
    }
</style>