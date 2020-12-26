import  { createApp } from 'vue'
import Antd from 'ant-design-vue';
// import AntdIcon from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import "@oneline/style/dist/index.css"
import './index.css'

const app = createApp(App);
app.use(Antd);
 
app.mount('#app')
