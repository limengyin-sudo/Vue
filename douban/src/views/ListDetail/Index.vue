<template>
  <div>
    <div class="content">
      <div class="head">
        <img class="pic" :src="list.imgSrc" alt />
        <img class="play" src="../../images/music/pause.png" alt />
      </div>
      <div class="detail">
          <div class="detail-head">
              <img class="avatar" :src="list.avatar" alt="">
              <p>
                  <span>{{list.author}}</span>
                  <span>发表于:</span>
                  <span>{{list.dateTime}}</span>
              </p>
          </div>
          <img class="icon-share" src="../../images/icon/share-anti.png" alt="">
          <img class="icon-col" src="../../images/icon/collection-anti.png" alt="">
          <p class="title">{{list.title}}</p>
          <p class="info">{{list.detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListDetail",
  data() {
    return {
      list: []
    };
  },
  computed: {
    postId() {
      return this.$route.query.postId;
    }
  },
  mounted() {
    var postId = this.postId;
    console.log(postId)
    this.axios
      .get(`http://yapi.demo.qunar.com/mock/36046/read`)
      .then(res => {
        this.list = res.data[postId];
        console.log(res.data[postId]);
      });
  }
};
</script>

<style lang="less" scoped>
    .head{
        position: relative;
        width: 100%;
    }
    .pic{
        width: 100%;
        height: 440px;
    }
    .play{
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .detail-head{
        display: flex;
        align-items: center;
    }
    .avatar{
        width: 120px;
        height: 120px;
    }
    .detail-head span{
        font-size: 38px;
        color: #333;
        padding-left: 10px;
    }
    .icon-share,
    .icon-col{
        position: absolute;
        width: 100px;
        height: 100px;
    }
    .icon-share{
        position: absolute;
        right: 14px;
    }
    .icon-col{
        right: 140px;
    }
    .title{
        text-align: left;
        font-size: 42px;
        color: #333;
        font-weight: bold;
        padding: 12px;
        margin-top: 116px;
    }
    .info{
        color: #333;
        font-size: 34px;
        line-height: 68px;
        padding: 10px;
        text-align: left;
    }
</style>