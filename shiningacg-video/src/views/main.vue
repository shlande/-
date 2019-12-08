<template>
  <div id="views">
    <searchBar/>
    <resultBar/>
    <sideBar/>
  </div>
</template>
<script>
import searchBar from '@/components/searchBar/main.vue'
import resultBar from '@/components/resultBar/main.vue'
import sideBar from '@/components/sideBar/main.vue'
export default {
  name: 'views',
  components: {
    searchBar,
    resultBar,
    sideBar
  },
  data() {
    return {
    }
  }
}
</script>
<style>
#views{
    position: relative;
    top: 6px;
    margin: 0 auto;
    width: 90%;
    border: 1px solid #F2F6FC;
    border-radius: 3px;
    box-shadow: 0px 0px 10px #888888;
    background-color: #F2F6FC;
    overflow: hidden;
}
</style>