<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-08-26 20:16:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 08:27:06
 -->

# ele-dialog

## 一、使用方式

- 1、安装

  ```shell
  npm install ele-dialog
  或者
  yarn add ele-dialog
  ```

- 2、在项目中的`main.js`文件中引入

  ```js
  import EleDialog from "ele-dialog"
  import "ele-dialog/lib/ele-dialog.css"
  Vue.use(EleDialog)
  ```

* 3、组件中使用

  ```html
  <template>
    <div id="app">
      <ele-dialog v-model="visible" :confirmFunc="confirmBtn" title="新增">
        <template slot="dialog-body">
          内容区域
        </template>
      </ele-dialog>
    </div>
  </template>

  <script>
    export default {
      name: "app",
      data() {
        return {
          visible: false
        }
      },
      methods: {
        openModel() {
          this.visible = true
        },
        confirmBtn() {
          this.visible = false
          console.log("提交，回调")
        }
      }
    }
  </script>
  ```

## 二、主要的`API`

|     参数      |    类型    | 说明     | 默认值 |
| :-----------: | :--------: | -------- | ------ |
| `confirmFunc` | `Function` | 提交回调 | 空     |
|    `title`    | `String` | 标题     |   空     |
