import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Form,Input,Icon,FormModel,message,Table } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios' 
import _ from 'lodash'

// axios配置
axios.defaults.baseURL = 'http://47.98.251.40:8092/'
Vue.prototype.$http = axios
Vue.prototype._ = _

Vue.config.productionTip = false


// 组件部分引入
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(FormModel);
Vue.use(Table);

Vue.prototype.$message = message;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
