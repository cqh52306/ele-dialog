/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-09-09 16:58:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 08:12:12
 */
import EleDialog from "./dialog.vue"

EleDialog.install = Vue => {
    Vue.component(EleDialog.name, EleDialog)
}

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(EleDialog)
}
export default EleDialog