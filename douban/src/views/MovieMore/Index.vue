<template>
  <div>
      <div class="content">
            <div v-for="val of movies" :key="val.id">
                <item :data="val"></item>
            </div>
      </div>
  </div>
</template>

<script>
    import Item from '../../components/Item'
    export default {
    name: "MovieMore",
    data() {
        return {
            movies: []
        };
    },
    components:{
        Item
    },
    computed: {
        subTitle() {
            return this.$route.query.subTitle;
        }
    },
    mounted() {
        var subTitle = this.subTitle;
        this.axios
        .get(`https://douban.uieee.com/v2/movie/${subTitle}`)
        .then(res => {
            this.movies = res.data.subjects;
            // console.log(res.data.subjects);
        });
    }
};
</script>

<style lang="less" scoped>
    .content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .content div{
        margin-top: 10px;
    }
</style>