<template>
  <div class="file-list">
    <file class="file" v-for="(item,index) in data" :key="index" :data="item" />
  </div>
</template>
<script>
import file from '@/components/file/main'
export default {
  name: 'files',
  components: {
    file
  },
  props: {
    data: []
  }
}
</script>
<style>
.file-list{
  position: relative;
  overflow: hidden;
  list-style-type: none;
  height: auto;
  width: -webkit-calc(100% - 60px);
  margin: 10px 30px 20px 30px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #888888;
  background-color: #ffffff;
  padding-left: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>