<template>
  <div id="app">
    <div id="tabBar">
      <router-link to="/DRouting" class="router">
        <i class="iconfont icon-right"></i>
        <p class="name">DRouting</p>
      </router-link>
      <router-link to="/films" class="films">
        <i class="iconfont icon-shipin1"></i>
        <p class="name">Films</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  #app {
    width:100%;
    height: 100%;
    margin-left:auto;
    margin-right:auto;
  }
  #tabBar{
    width: 100%;
    height: 120px;
    position: fixed;
    bottom: 0px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    text-align: center;
    border-top: 2px solid #e0e0e0;
    background-color: #F2F3F5;
    z-index: 999;
  }
  .router,
  .films{
    color: #666;
    font-size: 30px;
  }
  .iconfont{
    font-size: 54px;
  }
  #tabBar .router-link-exact-active{
    color: #eb7070;
  }
  .name{
    margin: 0;
  }
</style>
