<template>
   <div class="ol-layout-h c-space-b ol-p-8 download-bg">
     <h3 class='ol-c_white'>下载</h3>
     <div class="ol-flex"> <a-input-search v-model="searchKey" placeholder="搜索词" enter-button @search="search"  /></div>
     <div><MoreOutlined /></div>
   </div>
</template>

<script>
import svg from '@oneline/svg';
import {MoreOutlined} from '@ant-design/icons-vue';
export default {
  components: {MoreOutlined},
  name: 'download-header',
  props: {
    msg: String,
    
  },
  data() {

console.log(svg)
    return {
      icon:  svg.olSvgIcon('search', 16, 'green', 'origin'),
      count: 0,
      searchKey: ''
    }
  },

  methods: {
    search() {
       console.log("go search");
       this.log("go search");
    }
  }
}
</script>
