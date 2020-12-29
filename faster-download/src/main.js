import  { createApp } from 'vue'
import Antd from 'ant-design-vue';
import {QWebChannel, QWebChannelMessageTypes} from './lib/qwebchannel';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import "@oneline/style/dist/index.css"
import './index.css'

let hasQt = true;
try{
    qt;
} catch {
    hasQt = false;
}



const create = function(channel) {
    const app = createApp(App);
    if(channel) {
        app.config.globalProperties.$channel = channel.objects.channel;
        app.config.globalProperties.log = channel.objects.channel.log;
    } else {
        app.config.globalProperties.log = console.log;
    }
  
    app.use(Antd); 
    app.mount('#app');
}

if(hasQt) {
    const callback = function(channel) {
        create(channel);
    }
    new QWebChannel(qt.webChannelTransport, callback)
} else {
    create();
}




