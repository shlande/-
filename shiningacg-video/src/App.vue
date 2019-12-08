<template>
  <div id="app">
    <topNav/>
    <topLogo/>
    <views/>
  </div>
</template>

<script>
import topNav from './components/topNav/main' // HELLOWORLD
import topLogo from './components/topLogo/main'
import views from './views/main'
export default {
  name: 'app',
  components: {
    topNav,
    topLogo,
    views
  }
}
</script>

<style>
* {
  margin:0px;
  padding:0px;
}
#app {
  position: relative;
  background: url('../public/background.jpg') no-repeat;
  background-size: cover;
}
</style>
