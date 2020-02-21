<template>
  <div id="app">
    <div class="tabBar">
      <router-link to="/cart" class="cart">
        <i class="iconfont icon-cart1"></i>
        <p class="name">Cart</p>
      </router-link>
      <router-link to="/todoList" class="todo">
        <i class="iconfont icon-todo"></i>
        <p class="name">Todo</p>
      </router-link>
      <router-link to="/tang" class="tang">
        <i class="iconfont icon-tang"></i>
        <p class="name">Tang</p>
      </router-link>
      <router-link to="/search" class="search">
        <i class="iconfont icon-sousuo  "></i>
        <p class="name">Search</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
  #app {
    width:10rem;
    height: 100%;
    margin-left:auto;
    margin-right:auto;
  }
  .tabBar{
    width: 10rem;
    height: 60px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    place-items: center;
    position: fixed;
    bottom: 0;
    text-align: center;
    border-top: 2px solid #e0e0e0;
    background-color: #F2F3F5;
    z-index: 100;
  }
  .cart,
  .todo,
  .tang,
  .search{
    color: #666;
    font-size: 16px;
  }
  .iconfont{
    font-size: 24px;
  }
  .router-link-exact-active{
    color: #eb7070;
  }
</style>
