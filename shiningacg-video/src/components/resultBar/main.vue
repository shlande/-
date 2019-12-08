<template>
  <div class="result">
    <div class="title">小主姬项目</div>
    <div class="project">
      <div class="no-result" v-show="result.projects.length===0">空空如也～</div>
      <project v-for="(item,index) in result.projects" :key="index" :data="item" />
    </div>
    <div class="title">所有文件</div>
    <div class="files">
      <div class="no-result" v-show="result.files.length===0">空空如也～</div>
      <files class="files" :data="result.files" v-if="result.files.length!==0" />
    </div>
  </div>
</template>
<script>
import project from './project'
import files from './file'
export default {
  components: {
    project,
    files
  },
  data() {
    return {
      result: {
        projects: [],
        files: [
          {
            name: 'haha',
            size: 1024,
            type: 'video',
            path: ['/ss']
          }
        ]
      }
    }
  },
  computed: {
    queryResultFiles() {
      return this.$store.state.queryResult.files
    },
    queryResultProjects() {
      return this.$store.state.queryResult.projects
    }
  },
  watch: {
    queryResultFiles(files) {
      this.result.files = files
      console.log('result', result)
    },
    queryResultProjects(projects) {
      this.result.projects = projects
    }
  },
  methods: {
    updateQueryResult() {}
  }
}
</script>
<style>
.result {
  width: -webkit-calc(100% - 230px);
  height: 100%;
  padding-bottom: 10px;
}
.no-result {
  height: 150px;
  padding-top: 100px;
  text-align: center;
  font-size: 32px;
}
.project > div.project {
  position: relative;
  overflow: hidden;
  list-style-type: none;
  height: 260px;
  width: -webkit-calc(100% - 60px);
  margin: 10px 30px 20px 30px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #888888;
  background-color: #ffffff;
}
.result > div.title {
  text-align: left;
  padding-left: 30px;
}
</style>