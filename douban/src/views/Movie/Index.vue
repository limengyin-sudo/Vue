<template>
    <div>
        <div class="container" v-for="(item,index) of movies" :key="index">
            <div class="title">
                <p>{{item.title}}</p>
                <p class="more" @click="handleMore(item.subTitle)">更多></p>
            </div>
            <div class="wrap-content">
                <div class="content" v-for="(val,index) of item.data" 
                :key="index">
                    <item :data="val" :value="val.rating.average | formatStar()"></item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
        name:"Movie",
        data(){
            return {
                movies:[]
            }
        },
        components:{
            Item
        },
        mounted() {
            var movies = []
            this.axios.get("https://douban.uieee.com/v2/movie/coming_soon").then(res=>{
                var coming_soon = {}
                coming_soon.title = "即将上映";
                coming_soon.data = res.data.subjects.slice(0, 3);
                coming_soon.subTitle = "coming_soon";
                movies.push(coming_soon)
            })
            this.axios.get("https://douban.uieee.com/v2/movie/in_theaters").then(res=>{
                var inTheater = {}
                inTheater.title = "正在热映";
                inTheater.data = res.data.subjects.slice(0, 3);
                inTheater.subTitle = "in_theaters";
                movies.push(inTheater)
            })
            this.axios.get("https://douban.uieee.com/v2/movie/top250").then(res=>{
                var top250 = {}
                top250.title = "豆瓣top250";
                top250.data = res.data.subjects.slice(0, 3);
                top250.subTitle = "top250";
                movies.push(top250)
            })
            this.movies = movies;
            console.log(this.movies)
        },
        methods:{
            handleMore(subTitle){
                this.$router.push(`/movieMore?subTitle=${subTitle}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .title{
        display: flex;
        justify-content: space-between;
        padding: 16px;
        font-size: 34px;
    }
    .wrap-content{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .container{
        margin-top: 24px;
    }
</style>