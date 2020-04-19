// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import * as three from 'three'
// Vue.use(THREE)
Vue.prototype.three = three

import echarts from 'echarts'
Vue.prototype.echarts = echarts
// Vue.use(echarts)

import common from './util/common.js'
Vue.prototype.common = common

import axios from 'axios'
// Vue.use(VueResource)
// Vue.congig.prouductionTip = false
Vue.prototype.$axios = axios
import 'echarts/extension/bmap/bmap'
import './assets/css/layout.css'
import './assets/css/themeStyle.css'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'KLvkdhzxRvQRv0sL7btDzL7GaLlBHef3'
});
import  VueResource  from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

