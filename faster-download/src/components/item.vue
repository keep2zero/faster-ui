<template>
  <div class="download-item ol-layout-h c-top ol-line ol-p-8">
    <span class="ol-w-100 ol-h-80 ol-layout-h c-cent">
      <img class="ol-w-40 ol-h-40"
        :src="item.icon"
      />
    </span>
    <div class="c-flex ol-p-20__l" style="border-left: #eee 1px solid;">
      <h4>{{item.title}}</h4>
      <p class="ol-c_muted">
        {{item.url}}
      </p>
      <div>
        <a-progress :percent="item.progress" status="active" />
      </div>
      <div class='ol-m-10__t'>
        <a-space>
          <a href="javascript:void(0);"  v-if='item.state == 3' @click='open(item.savePath)'>所在文件夹</a> 
          <a-button type='primary' v-if='item.state == 0' size='small' @click='pause'>暂停</a-button> 
          <a-button type='primary' v-if='item.state == 1' size='small' @click='start'>开始</a-button> 
          <a-button type='danger' v-if='item.state < 2' size='small' @click='cancel'>取消</a-button>
          <a-button type='link' v-if='item.state == 2' size='small' @click='retry'>重新下载</a-button>
        </a-space>
      </div>
    </div>

    <CloseOutlined />
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

  mounted() {
     
  },

  methods: {
    pause(){

    },
    start() {

    },
    cancel() {

    },
    retry() {

    }
  }
};
</script>

<style>
</style>