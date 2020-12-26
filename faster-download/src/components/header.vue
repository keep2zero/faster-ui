<template>
   <div class="ol-layout-h c-space-b ol-p-8 download-bg">
     <h3 class='ol-c_white'>下载</h3>
     <div class="ol-flex"> <a-input-search placeholder="input search text" enter-button  /></div>
     <div><MoreOutlined /></div>
   </div>
</template>

<script>
import svg from '@oneline/svg';
import {MoreOutlined} from '@ant-design/icons-vue';
export default {
  components: {MoreOutlined},
  name: 'HelloWorld',
  props: {
    msg: String,
    
  },
  data() {

console.log(svg)
    return {
      icon:  svg.olSvgIcon('search', 16, 'green', 'origin'),
      count: 0
    }
  }
}
</script>
