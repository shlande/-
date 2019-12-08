<template>
  <div id="top-nav">
    <div class="back">返回主站</div>
    <ul class="topnav">
      <!-- 循环输出头部菜单选项卡 -->
      <li class="topbtn" v-for="(topbtn,index) in topbtns" :key="index">
        <a :href="topbtn.herf">{{topbtn.content}}</a>
      </li>
    </ul>
    <div class="userbar">
      <ul>
        <li class="child">message</li>
        <li class="child">avatar</li>
        <li class="child">quit</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topNav',
  data() {
    return {
      userInfo: {
        name: '',
        avatar: 'url'
      },
      network: {
        peers: []
      },
      topbtns: [
        {
          content: '资源搜索',
          herf: '#'
        },
        {
          content: '资源下载',
          herf: '#'
        },
        {
          content: '关于我们',
          herf: '#'
        },
        {
          content: '回到主页',
          herf: '#'
        }
      ]
    }
  }
}
</script>
<style scoped>
#top-nav{
  min-width: 1024px;
  position: relative;
  height: 50px;
  background-color: #406076;
}
.back {
  position: absolute;
  top: 12px;
  left: 3%;
}
.topnav {
  height: 100%;
  position: absolute;
  list-style-type: none;
  top: 0;
  left: 180px;
}
.topbtn {
  height: 100%;
  display: inline-block;
  height: 100%;
  text-align: center;
}
.topbtn:hover {
  background-color: #3f585e;
}
.topbtn a {
  display: block;
  padding: 12px 15px 12px 15px;
  text-decoration: none;
  color: #859eb8;
}
.userbar {
  position: absolute;
  left: -webkit-calc(100% - 150px);
  top: 14px;
  width: 150px;
}
.userbar .child {
  text-align: center;
  display: inline-block;
  color: #859eb8;
}
</style>