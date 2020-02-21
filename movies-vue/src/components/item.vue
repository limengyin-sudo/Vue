<template>
  <div class="content">
      <img :src="data.images.small" alt="">
      <div class="detail">
        <p class="title">{{data.title}}</p>
        <p class="info">
          <span>{{data.pubdates[0]}}/</span>
          <span>{{data.durations[0]}}/</span>
          <span>{{data.genres[0]}}/{{data.genres[1]}}/</span>
          <span>{{data.directors[0].name}}/</span>
          <span>{{data.title}}</span>
        </p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'MovieItem',
  props: {
    data:{
      type: Object
    }
  }
}
</script>
<style scoped>
  .content{
    display: flex;
    border-bottom: 1px dashed #e0e0e0;
  }
  img{
    width: 77px;
    height: 109px;
    padding: 18px;
  }
  .title{
    font-size: 15px;
    color: #3A77AA;
    padding-top: 10px;
  }
  .info span{
    font-size: 15px;
    color: #666;
  }
</style>