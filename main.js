import Vue from 'vue'
import App from './App'
import config from './config'
import store from './store'


import filter from './common/filter/filter'
import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 


Vue.prototype.$store = store
Vue.prototype.$config = config
Vue.config.productionTip = false
// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
