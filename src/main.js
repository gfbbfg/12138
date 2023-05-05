import { createApp } from 'vue'
import {ref} from 'vue'
import App from './App.vue'
import ddd from './components/ddd.vue'
import d from './components/d.vue'
import './assets/css/bootstrap.css'
import axios from 'axios'
import * as echarts from 'echarts'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
const app=createApp(App)
app.config.globalProperties.$http=axios
app.config.globalProperties.$echarts=echarts
createApp(App).component('ddd',ddd).component('d',d).mount('#app')
