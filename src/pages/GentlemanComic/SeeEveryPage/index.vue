<template>
  <div>
    <GCheader/>
    <SeeEveryPageBody />
    放大看
  </div>
</template>

<script>
import GCheader from '../GCheader/index.vue'
import SeeEveryPageBody from './pageBody.vue'
export default {
name:'SeeEveryPage',
components:{GCheader,SeeEveryPageBody},


}
</script>

<style scoped>
div {
  background: #dbdbdb;
}
</style>