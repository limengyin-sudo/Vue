<template>
    <div class="container">
        <div class="head">
            <div class="nav">
                当前城市-
            </div>
            <div class="search">
                <van-icon name="search"  class="search-icon"/>
                <input class="inputName" type="text" placeholder="输入城市名或拼音">
            </div>
        </div>
        <div class="hot">
            <p class="name">GPS定位你所在的城市</p>
            <p class="fail val">定位失败</p>
            <p class="name">热门城市</p>
            <div class="list">
                <router-link class="val" @click.native="handleClick(item)"
                to="/films" v-for="item of list" :key="item">
                    {{item}}
                </router-link>
            </div>
        </div>
        <div class="city">
            <van-index-bar>
            <van-index-anchor index="A" />
            <p title="">鞍山</p>
            <p title="">安庆</p>
            <p title="">安阳</p>
            <p title="">安顺</p>
            <p title="">安康</p>

            <van-index-anchor index="B" />
            <p title="">北京</p>
            <p title="">保定</p>
            <p title="">包头</p>
            <p title="">巴彦淖尔</p>
            <p title="">本溪</p>
            <p title="">白山</p>
            <p title="">白城</p>
            <p title="">安康</p>
            <p title="">蚌埠</p>
            <p title="">亳州</p>
            <p title="">滨州</p>
            <p title="">北海</p>
            <p title="">百色</p>
            <p title="">巴中</p>
            <p title="">毕节</p>
            <p title="">保山</p>
            <p title="">宝鸡</p>
            <p title="">白银</p>

            <van-index-anchor index="C" />
            <p title="">承德</p>
            <p title="">沧州</p>
            <p title="">长治</p>
            <p title="">朝阳</p>
            <p title="">长春</p>
            <p title="">常州</p>
            <p title="">滁州</p>
            <p title="">长沙</p>
            <p title="">常德</p>
            <p title="">郴州</p>
            <p title="">潮州</p>
            <p title="">澄迈县</p>
            <p title="">昌江黎族自治县</p>
            <p title="">重庆</p>
            <p title="">成都</p>
            <p title="">楚雄彝族自治州</p>
            </van-index-bar>
        </div>
    </div>
</template>

<script>
    export default {
        name:"City",
        data(){
            return {
                list:['北京','上海','广州','深圳']
            }
        },
        methods:{
            handleClick(city){
                console.log(city)
                this.$store.dispatch("changeCity",city)
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width:100%;
    }
    .head{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 10;
        text-align: center;
    }
    .nav{
        background-color: #fff;
        height: 100px;
        line-height: 100px;
    }
    .search{
        background-color: #f4f4f4;
        padding: 30px;
        position: relative;
    }
    .inputName{
        width: 90%;
        height: 56px;
        outline: none;
        border-radius: 8px;
        border: none;
        background-color: #fff;
        padding-left: 62px;
        font-size: 24px;
        color: #999;
    }
    .search-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50px;
    }
    .hot{
       position: absolute;
       top: 240px;
       padding-left: 20px;
    }
    .name{
        color: #666;
        font-size: 24px;
    }
    .val{
        font-size: 28px;
        color: #333;
        background-color: #f4f4f4;
        border-radius: 4px;
        text-align: center;
        width: 150px;
        height: 50px;
        line-height: 50px;
        margin-right: 32px;
        margin-top: 20px;
    }
    .list{
        width: 100%;
        display: flex;
    }
    .list div{
        margin-right: 32px;
    }
    .city{
        position: absolute;
        top: 520px;
        z-index: -2;
    }
    .city p{
        margin-left: 20px;
        color: #333;
        line-height: 60px;
    }
</style>