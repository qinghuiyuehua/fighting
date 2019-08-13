// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */


import VueX from "vuex";
Vue.use(VueX);

import MsgModule from "./vuexModule/Message"

const store = new VueX.Store({
  modules:{
    a:MsgModule,
  }
})

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
