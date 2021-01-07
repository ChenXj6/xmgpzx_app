import Vue from 'vue'
import App from './App'
import config from './config'
import store from './store'

import Request from './js_sdk/pocky-request/pocky-request v.2.0.4/index.js'

import md5 from 'js-md5'
import filter from './common/filter/filter'
import mixin from './common/mixin/mixin'

Vue.mixin(mixin) 

Vue.prototype.$md5 = md5
Vue.prototype.$store = store
Vue.prototype.$config = config
Vue.config.productionTip = false

Vue.prototype.axios = Request();
// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import uniIcons from "@/components/uni-icons/uni-icons.vue"

Vue.component('uni-icons', uniIcons)
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
