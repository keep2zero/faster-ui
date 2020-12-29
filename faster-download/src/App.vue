<template>
   <download-header></download-header>
   <div style="max-width: 1200px; margin: 0 auto; border: 1px solid #eee; margin-top: 20px;">
     <download-item v-for="item in list" :item="item" :key="item.id"></download-item>
   </div>
</template>

<script>
import DownloadHeader from './components/header.vue'
import DownloadItem from './components/item.vue'
 

export default {
  name: 'App',
  components: {
    DownloadHeader,
    DownloadItem
  },

  data() {
    
    return {
      list: []
    }
  },

  created() {
    this.$channel.queryDownloadList().then(result => {
      this.list = result;
    })

    this.$channel.noticeDownloadstart.connect((result) => {
       this.list.unshift(result);
       this.log(result);
    })
  }

   
}
</script>
