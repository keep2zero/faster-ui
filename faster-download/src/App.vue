<template>
   <download-header></download-header>
   <div>
     <download-item></download-item>
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
  }
}
</script>
