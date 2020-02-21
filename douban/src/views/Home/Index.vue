<template>
    <div class="container">
        <img class="user" src="../../images/avatar/user.png" alt="">
        <p class="title">Hello Vue!</p>
        <button class="btnGo" @click="handleGo">开启我的vue之旅</button>
    </div>
</template>

<script>
    export default {
        name:"Home",
        methods:{
            handleGo(){
                this.$router.push('/about')
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f7e0a3;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user{
        width: 180px;
        height: 180px;
        margin-top: 180px;
    }
    .title{
        margin-top: 200px;
        font-size: 36px;
    }
    .btnGo{
        padding: 20px;
        border: 1px solid #f09c67;
        background-color: #f7e0a3;
        font-size: 30px;
        margin-top: 400px;
        color: #f09c67;
        border-radius: 8px;
        outline: none;
    }
</style>