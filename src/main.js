import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import axios from 'axios';
import './lib/app.css';
import './lib/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api'  // api 即上面 vue.config.js 中配置的地址
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
