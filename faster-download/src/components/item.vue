<template>
  <div class="download-item ol-layout-h c-top ol-line ol-p-8">
    <span class="ol-w-100 ol-h-80 ol-layout-h c-cent"> 
      <span :class="'ol-w-40 ol-h-40 fiv-viv fiv-icon-'+item.fileType"></span>
    </span>
    <div class="c-flex ol-p-20__l" style="border-left: #eee 1px solid;">
      <h4 @click="openFile" :style="stateStyle">{{item.title}}</h4>
      <p class="ol-c_muted">
        {{item.url}}
      </p>
      <div v-if="item.state == 0 || item.state == 1">
        <span v-if="item.speed > -1">{{item.speed}}kb/s</span><a-progress :percent="item.progress" status="active" :showInfo="false" />
      </div>
      <div class='ol-m-10__t'>
        <a-space> 
          <a href="javascript:void(0);"  v-if='item.state == 3' @click='open(item.did)'>所在文件夹</a> 
          <a-button type='primary' v-if='item.state == 0' size='small' @click='pause'>暂停</a-button> 
          <a-button type='primary' v-if='item.state == 1' size='small' @click='start'>开始</a-button> 
          <a-button type='danger' v-if='item.state < 2' size='small' @click='cancel'>取消</a-button>
          <a-button type='link' v-if='item.state == 3||item.state==2' size='small' @click='retry'>重新下载</a-button>
        </a-space>
      </div>
    </div>

    <CloseOutlined @click="del"/>
  </div>
</template>

<script>
import {CloseOutlined} from '@ant-design/icons-vue';
export default {
  components: {CloseOutlined},
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
     
    }
  },

  computed: {
    stateStyle() {
         if(this.item.state == 2){
          return `text-decoration: line-through;color: #bbb;`
         }
         return "";
     }
  },

  mounted() {
     
  },

  methods: {
    openFile() {
      this.$channel.openDownloadFold(this.item.did, 0);
    },
    del() {
      this.$emit("delItem", this.item.did);
    },
    open(did) {
      this.$emit("open", did);
    },
    pause(){
      this.$channel.pauseDownloadItem(this.item.did);
    },
    start() {
       this.$channel.resumeDownloadItem(this.item.did);
    },
    cancel() {
      this.$channel.cancelDownloadItem(this.item.did);
    },
    retry() {
       this.$channel.retryDownloadItem(this.item.did);
    }
  }
};
</script>

<style>
</style>