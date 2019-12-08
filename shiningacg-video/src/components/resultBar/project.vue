<template>
  <div class="result-item">
    <div class="img-container">
      <img :src="data.image" alt />
      <div class="selecter">
        <div :class="{'infobtn':true,'active':infobtnActive}">
          <div class="btn" @click="clickSelecter('infobtnActive')"></div>
          <embed :src="infoSVG" type="image/svg+xml" />
        </div>
        <div
          :class="{'filebtn':true,'active':filebtnActive}"
          @click="clickSelecter('filebtnActive')"
        >
          <div class="btn" @click="clickSelecter('filebtnActive')"></div>
          <embed :src="fileSVG" type="image/svg+xml" />
        </div>
      </div>
    </div>
    <div class="content">
      <div v-show="infobtnActive">
        <div class="title">{{data.title}}</div>
        <div class="description">{{data.description}}</div>
      </div>
      <div v-show="filebtnActive">
        <file v-for="(item,index) in data.files" :key="index" :data="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import infoSVG from './info.svg'
import fileSVG from './file.svg'
import file from '@/components/file/main'
export default {
  name: 'result-item',
  components: {
    file
  },
  props: {
    data: {
      title: String,
      image: String,
      description: String,
      files: [
        {
          name: String,
          size: Number,
          type: String,
          path: []
        }
      ]
    }
  },
  data() {
    return {
      infoSVG,
      fileSVG,
      filebtnActive: false,
      infobtnActive: true
    }
  },
  methods: {
    clickSelecter(btn) {
      this.filebtnActive = false
      this.infobtnActive = false
      this[btn] = true
    }
  },
  mounted() {
    console.log(this.data)
    console.log(infoSVG)
  }
}
</script>
<style scoped>
.result-item {
  position: relative;
  overflow: hidden;
  height: 260px;
  margin: 10px 30px 20px 30px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #888888;
  background-color: #ffffff;
}
.img-container {
  position: relative;
  top: -1px;
  left: -1px;
  width: 460px;
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;
  height: auto;
}
.img-container img {
  position: relative;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: -1px 0 0 -1px;
  height: 260px;
  width: auto;
  z-index: 3;
}
.content {
  position: absolute;
  top: 0;
  left: 430px;
  text-align: left;
  height: -webkit-calc(100% - 30px);
  margin: 10px 10px 10px 0;
  width: -webkit-calc(100% - 475px);
  padding-left: 30px;
  background-color: #ecf0f1;
  border-radius: 5px;
  border: 3px solid #ecf0f1;
  z-index: 2;
  overflow: scroll;
  scroll-behavior: unset;
}
.content::-webkit-scrollbar {
  display: none;
}
.content .title {
  margin-left: 10px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Microsoft Yahei';
  color: #666666;
}
.content .description {
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
  white-space: normal;
}
.img-container .selecter {
  position: absolute;
  top: 0;
  left: 400px;
  z-index: 5;
  width: 100px;
  height: 260px;
  background-color: rgba(253, 251, 251, 0.3);
}
.img-container .selecter .btn {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: transparent;
}
.img-container .selecter .infobtn {
  overflow: hidden;
  position: relative;
  height: 50%;
}
.img-container .selecter .filebtn {
  overflow: hidden;
  position: relative;
  height: 50%;
}
.img-container .selecter .active {
  background-color: rgba(253, 251, 251, 0.7);
}
.img-container .selecter embed {
  position: absolute;
  left: 15px;
  top: 50px;
  width: 32px;
  height: 32px;
}
.important {
  color: red;
}
.content .file {
  position: absolute;
  top: 0;
  left: 430px;
  height: -webkit-calc(100% - 30px);
  margin: 10px 10px 10px 0;
  width: -webkit-calc(100% - 445px);
  background-color: #ecf0f1;
  border-radius: 5px;
  border: 3px solid #ecf0f1;
  z-index: 2;
  overflow: scroll;
  scroll-behavior: unset;
}
</style>