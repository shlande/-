<template>
  <div id="side-bar">
    <div class="range">
      <div class="title">查找范围</div>
      <div class="checkbox">
        <el-checkbox label="小主机项目" v-model="form.type.project"></el-checkbox>
        <el-checkbox label="所有文件" v-model="form.type.files"></el-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Checkbox } from 'element-ui'
export default {
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  data() {
    return {
      form: {
        type: {
          files: true,
          project: true
        }
      }
    }
  }
}
</script>
<style>
.el-checkbox {
  display: block;
  padding: 3px;
  margin-left: 5px;
}
.checkbox {
  margin-top: 3px;
}
</style>
<style scoped>
#side-bar {
  position: absolute;
  top: 84px;
  right: 0px;
  margin-top: 10px;
  border: 1px solid #e4e7ed;
  box-shadow: 0px 0px 5px #888888;
  background-color: #ffffff;
  margin-right: 10px;
  width: 210px;
  height: 580px;
  padding: 10px;
}
.title {
  color: #666666;
}
</style>