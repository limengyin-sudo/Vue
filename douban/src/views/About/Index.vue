<template>
    <div class="container">
        <div class="nav">
            <router-link to="/about/read" class="read">
                <i class="iconfont icon-yuedureading19"></i>
                <p class="name">Read</p>
            </router-link>
            <router-link to="/about/movie" class="movie">
                <i class="iconfont icon-dianying"></i>
                <p class="name">Movie</p>
            </router-link>
            <router-link to="/about/music" class="music">
                <i class="iconfont icon-yinlecopy"></i>
                <p class="name">Music</p>
            </router-link>
            <router-link to="/about/my" class="my">
                <i class="iconfont icon-wodedangxuan1"></i>
                <p class="name">My</p>
            </router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name:"About"
    }
</script>

<style lang="less" scoped>
    .container{
        text-align: center;
    }
    .nav{
        width: 100%;
        height: 120px;
        position: fixed;
        bottom: 0px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        place-items: center;
        text-align: center;
        border-top: 2px solid #e0e0e0;
        background-color: #F2F3F5;
        z-index: 999;
    }
    .nav i{
        font-size: 46px;
    }
    .read,
    .movie,
    .music,
    .my{
        text-decoration: none;
        color: #999;
    }
    .name{
        margin: 8px;
        text-decoration: none;
        
    }
    .router-link-exact-active{
        color: #f09c67;
    }
</style>