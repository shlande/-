<template>
  <div class="file-item">
    <div class="search_list">
      <div class="file_logo">
        <img :src="icons.video" v-show="data.type==='video'"/>
        <img :src="icons.video" v-show="data.type==='unknow'"/>
        <img :src="icons.video" v-show="data.type==='music'"/>
        <img :src="icons.video" v-show="data.type==='doc'"/>
      </div>
      <div class="file_info">
        <span
          class="filename"
        >{{data.name}}</span>
        <span class="filesize">{{data.size}}MB</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fileItem',
  props: {
    data: {
      name: String,
      size: Number,
      type: String,
      path: []
    }
  },
  data() {
    return {
      icons: {
        video: require('./video.png')
      }
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>
<style scoped>
/* .container .result .file::-webkit-scrollbar {
  display: none;
} */
.search_list {
  position: relative;
  height: 40px;
  width: -webkit-calc(100% - 3px);
  overflow: hidden;
  font-family: Microsoft YaHei, Apple LiGothic Medium, SimHei, STHeiti, SimSun;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}
.search_list:hover {
  background: rgb(230, 215, 250);
}
.file_info .filename {
  text-align: left;
  float: left;
  width: -webkit-calc(100% - 200px);
  margin: 0 0 1px 5px;
  height: 50px;
  vertical-align: central;
}
.file_info .filesize {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 100px;
  height: 18px;
  overflow: hidden;
  margin-top: 5px;
}
.file_logo {
  float: left;
  width: 32px;
  height: 32px;
  margin: 4px 20px;
}
.file_logo img {
  width: 32px;
  height: 32px;
}
</style>