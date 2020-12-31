<template>
   <download-header></download-header>
   <div style="max-width: 1200px; margin: 0 auto; border: 1px solid #eee; margin-top: 20px;">
     <download-item v-for="item in list" :item="item" :key="item.did" @open="open" @delItem="delItem"></download-item>
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

  methods: {

     findItem(did) {
       let result = [-1, null];
       for(let i = 0; i < this.list.length; i++) {
         const item = this.list[i];
         if(did == item.did) {
           result = [i, item];
           break;
         }
       }
       return result;
     },

     open(did) {
       this.$channel.openDownloadFold(did, 1);
     },

     delItem(did) {
       this.$channel.delDownloadItem(did);
     }
  },

  created() {
    this.$channel.queryDownloadList().then(result => { 
      result.forEach(item => {
        item.speed = -1;
      })
      this.list = result; 
      console.log("this is list:", result); 
    })



    this.$channel.noticeDownloadstart.connect((result) => {
      result.speed = -1;
       this.list.unshift(result);
       this.log("插入的数据:" + result.did);
    })

    this.$channel.noticleDownloadProgress.connect((did, progress, speed) => {
        const result = this.findItem(did);
        if(result[0] == -1) {this.log("没有找到：" + did);return;}
        const item = result[1];
        const index = result[0];
        if(progress > -1) {
          item.progress = parseInt(progress);
        } else {
          item.progress = parseInt(item.progress);
          if(item.progress + 10 > 100) {
            item.progress = 0;
          }
          item.progress += 20; 
        }

        item.speed = speed;
        // this.list.splice(index, item);

        console.log("progress:" + did + ">>" + progress +  ":" + item.progress);
    })


    this.$channel.noticleDownloadFinished.connect((did, state) => {
        const result = this.findItem(did);
        if(result[0] == -1) {console.log("没有找到：" + did);return;}
        const item = result[1];
        item.state = state;
    });


    this.$channel.noticeDownloadDelItem.connect((did) => {
       const result = this.findItem(did);
       console.log("删除：", did, result);
       if(result[0] == -1) {console.log("没有找到：" + did);return;}
       this.list.splice(result[0],1);
    })

    this.$channel.noticeDownloadItemState.connect((did, state) => {
       const result = this.findItem(did);
       if(result[0] == -1) {console.log("没有找到：" + did);return;}
       result[1].state = state;
    })

  }

   
}
</script>
