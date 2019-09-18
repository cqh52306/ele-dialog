<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-09-09 10:00:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 08:12:03
 -->
<template>
  <el-dialog :title="title" :visible="value" :close-on-click-dialog="false" @close="close" :width="width" class="ele-dialog">
    <slot name="dialog-body"></slot>
    <div slot="footer" class="dialog-footer">
      <slot name="dialog-footer">
        <el-button @click="closeBtn" size="small">取 消</el-button>
        <el-button type="primary" @click="confirmBtn" size="small">提 交</el-button>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'EleDialog',
  props: {
    // 显示与隐藏，绑定到v-model上的值
    value: {
      type: Boolean,
      default: false,
      required: true,
    },
    // 标题
    title: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: String,
      default: '1000px'
    },
    confirmDisable: {
      type: Boolean,
      default: false
    },
    // 是否隐藏底部
    isHideFooter: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 关闭的事件回调
    closeFunc: {
      type: Function,
      required: false,
    },
    // 关闭按钮文字
    closeText: {
      type: String,
      default: '关闭',
      required: false,
    },
    // 确认的事件回调
    confirmFunc: {
      type: Function,
      required: false,
    },
  },
  methods: {
    // 关闭窗口的事件
    close () {
      this.$emit('input', false);
    },
    // 关闭按钮事件
    closeBtn () {
      if (this.closeFunc) {
        this.closeFunc();
      } else {
        this.close();
      }
    },
    // 确认按钮事件
    confirmBtn () {
      if (this.confirmFunc) {
        this.confirmFunc();
      } else {
        this.close();
      }
    },
    // 拖拽事件
    move (e) {
      const odiv = e.target.parentNode.parentNode;
      if (this.draggable) {
        // 算出鼠标相对元素的位置
        const disX = e.clientX - odiv.offsetLeft;
        const disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (event) => {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = event.clientX - disX;
          let top = event.clientY - disY;
          // 计算能移动的最大位置与最小位置
          const maxX = document.documentElement.clientWidth - odiv.offsetWidth;
          const maxY = document.documentElement.clientHeight - odiv.offsetHeight;
          left = Math.min(maxX, Math.max(0, left));
          top = Math.min(maxY, Math.max(0, top));
          // 移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
          odiv.style.margin = 'unset';
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  },
  computed: {
    // 计算内容的宽度高度
    contentStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
      }
    }
  }
}
</script>
<style lang="scss">
.ele-dialog {
  .el-dialog__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  }
  .el-dialog__footer {
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
}
</style>