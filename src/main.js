import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Form, Input, Icon, FormModel, message, Table,List,Checkbox } from 'ant-design-vue'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import _ from 'lodash'

// axios配置
axios.defaults.baseURL = 'http://47.98.251.40:8092/'
Vue.prototype.$http = axios
Vue.prototype._ = _

Vue.config.productionTip = false

// Vue.use(Antd)
//组件按需引入
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(FormModel)
Vue.use(Table)
Vue.use(List)
Vue.use(Checkbox)



Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
