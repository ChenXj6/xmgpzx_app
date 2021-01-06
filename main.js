import Vue from 'vue'
import App from './App'
import config from './config'
import store from './store'

import md5 from 'js-md5'
import filter from './common/filter/filter'
import mixin from './common/mixin/mixin'
import axios from 'axios'
Vue.mixin(mixin) 

Vue.prototype.$md5 = md5
Vue.prototype.$store = store
Vue.prototype.$config = config
Vue.config.productionTip = false
// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import uniIcons from "@/components/uni-icons/uni-icons.vue"

Vue.component('uni-icons', uniIcons)
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'

// create an axios instance
const service = axios.create({
    baseURL: 'http://cp.xmgpzx.com/api', // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000, // request timeout
    crossDomain: true
})

axios.defaults.adapter = function(config) {
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}

Vue.prototype.$axios = service

export default Vue.prototype.$axios


const app = new Vue({
    ...App
})
app.$mount()
