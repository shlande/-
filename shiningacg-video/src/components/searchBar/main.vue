<template>
  <div id="search-bar">
    <input type="text" placeholder="要找些什么呢..." v-model="input"/>
    <button type="submit" @click="handle"></button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'searchBar',
  data() {
    return {
      input: ''
    }
  },
  watch:{
    input(value){
     // console.log(value) 延迟查询
    }
  },
  methods: {
    handle() {
      const _this = this
      axios({
        method:'GET',
        url:'http://share.shiningacg.org:8059/api/search.php?key='+this.input,
      }).then(res=>{
        console.log(res.data)
        _this.$store.dispatch('updateQueryData',res.data)
      }).then(
        console.log('search',_this.$store.state)
      )
    }
  }
}
</script>
<style>
#search-bar {
  position: relative;
  margin: 0 auto;
  padding-top: 10px;
  border: purple;
  width: 600px;
  height: 50px;
}
#search-bar input {
  float: right;
  font-size: 16px;
  width: 580px;
  height: 36px;
  padding-left: 15px;
  border-radius: 42px;
  border: 2px solid #324b4e;
  background: rgb(241, 241, 241);
  outline: none;
  position: relative;
}
#search-bar button {
  background: url(./search.png);
  transform: scale(0.2);
  transform-origin: top left;
  width: 128px;
  height: 128px;
  border: none;
  position: absolute;
  right: -80px;
  top: 16px;
}
</style>