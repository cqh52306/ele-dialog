<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-08-26 20:16:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 08:11:36
 -->
<template>
  <div id="app">
    <el-button @click="openModel" type="primary">打开弹框</el-button>
    <ele-dialog v-model="visible" :confirmFunc="confirmBtn" title="新增">
      <template slot="dialog-body">
        内容区域
      </template>
    </ele-dialog>
  </div>
</template>

<script>
import EleDialog from '../packages/ele-dialog/dialog';
export default {
  name: 'app',
  components: {
    EleDialog
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    openModel () {
      this.visible = true;
    },
    confirmBtn () {
      this.visible = false;
      console.log('提交，回调')
    }
  }
}
</script>

<style lang="scss">
</style>
