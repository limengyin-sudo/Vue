<template>
  <div>
      <div class="item" v-for="item of programs" :key="item.id">
          <img :src="item.coverUrl" alt="">
          <p class="name">{{item.name}}</p>
          <p class="radioName">{{item.radio.name}}</p>
          <p class="listenerCount">播放{{item.listenerCount}}</p>
          <p class="likedCount">赞{{item.likedCount}}</p>
          <p class="category">{{item.radio.category}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data(){
    return {
      programs:[]
    }
  },
  mounted() {
    var url = "https://music.aityp.com/program/recommend";
    axios.get(url).then(res=>{
        this.programs = res.data.programs
    })
  }
};
</script>

<style scoped>
    .item{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
    }
    img{
        width: 200px;
        height: 200px;
        margin: 40px 0 40px 40px;
    }
    p{
        margin-left: 20px;
        margin-right: 20px;
    }
    .name,
    .radioName{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
    }
    .radioName{
        margin-left: 50px;
        color: #666;
    }
    .listenerCount,
    .likedCount{
        font-size: 14px;
        color: #666;
        width: 150px;
    }
    .listenerCount{
        margin-left: 80px;
    }
    .category{
        /* width: 68px; */
        border: 1px solid #666;
        margin-right: 40px;
    }
</style>