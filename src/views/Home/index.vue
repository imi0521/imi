<template>
  <div>
   <Recommend />
   <Music />
   <TabVue />
  </div>
</template>

<script>
import Recommend from './Recommend'
import Music from './Music'
import TabVue from './TabVue'

export default {
  name: 'Home',
  components:{
    Recommend,
    Music,
    TabVue
  },
  
}
</script>
