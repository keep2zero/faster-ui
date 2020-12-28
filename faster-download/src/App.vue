<template>
   <download-header></download-header>
   <div style="max-width: 1200px; margin: 0 auto; border: 1px solid #eee; margin-top: 20px;">
     <download-item v-for="item in list" :item="item" :key="item.id"></download-item>
   </div>
</template>

<script>
import DownloadHeader from './components/header.vue'
import DownloadItem from './components/item.vue'



function mockList() {
  return [
    {id: 'idx1', state:0, icon: 'https://pic.rmb.bdstatic.com/3ed907b27ae29f17bc34e0bcfdd64d73.jpeg', title: '51亿打水漂，李嘉诚又赌输了', url: 'https://mbd.baidu.com', savePath: '', isDel: false, progress: 10},
    {id: 'idx2',  state:1, icon: 'https://pic.rmb.bdstatic.com/3ed907b27ae29f17bc34e0bcfdd64d73.jpeg', title: '51亿打水漂，李嘉诚又赌输了', url: 'https://mbd.baidu.com', savePath: '', isDel: false, progress: 10},
    {id: 'idx3', state:3, icon: 'https://pic.rmb.bdstatic.com/3ed907b27ae29f17bc34e0bcfdd64d73.jpeg', title: '51亿打水漂，李嘉诚又赌输了', url: 'https://mbd.baidu.com', savePath: '', isDel: false, progress: 10}
  ]
}



export default {
  name: 'App',
  components: {
    DownloadHeader,
    DownloadItem
  },

  data() {
    console.log(this)
    return {
      list: mockList()
    }
  },

   
}
</script>
