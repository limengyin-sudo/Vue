<template>
  <div class="amap-page-container">
    <div class="amap-wrapper">
    <el-amap
    :vid="'amap-vue'"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
    >
    <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :vid="index"></el-amap-marker></el-amap>
    </div>

  </div>
</template>
<script>
export default {
    name:"My",
    data() {
        return {
        zoom: 12,
        center: [114.503506,30.552515],
        markers: [{
                position: [114.503506,30.552515],
                }
            ]
        };
      }
    };
</script>
<style>
    .amap-wrapper {
        width: 100%;
        height: 500px;
    }
    .amap-demo {
        height: 300px;
    }
</style>