<template>
  <div id="app">
    <div class="tabBar">
      <router-link class="music" to="/music">
        <i class="iconfont icon-tuijian"></i>
        <p>推荐音乐</p>
      </router-link>
      <router-link class="mv" to="/mv">
        <i class="iconfont icon-mv"></i>
        <p>Mv</p>
      </router-link>
      <router-link class="all" to="/all">
        <i class="iconfont icon-jiaruwangyiyinleren"></i>
        <p>All</p>
      </router-link>
      <router-link class="cart" to="/cart">
        <i class="iconfont icon-cart"></i>
        <p>Cart</p>
      </router-link>
      <router-link class="carousel" to="/carousel">
        <i class="iconfont icon-lunbo-"></i>
        <p>Carousel</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
  #app {
    width:10rem;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    background-color: #eee;
  }
  .tabBar{
    width: 10rem;
    height: 100px;
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(5,1fr);
    position: fixed;
    border-top: 2px solid #ccc;
    bottom: 0;
    font-size: 22px;
    background-color: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .music,
  .mv,
  .all,
  .cart,
  .carousel{
    color: #bfbfbf;
    text-decoration: none;
  }
  #app .tabBar .router-link-exact-active{
    color:#eb7070;
  }
  .tabBar img{
    width: 50px;
    height: 50px;
  }
  .tabBar .iconfont{
    font-size: 40px;
  }
</style>