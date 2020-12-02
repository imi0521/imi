<template>
  <div class="collection-block">
    <div class="block-padding">
      <h3>歌曲推荐</h3>
    </div>
    <div class="list clearfix">
      <!-- 每个item -->
      <router-link
      tag="div"
      :to="{name:'Player',params:{id:item.id,name:item.name,image:encodeURIComponent(item.picUrl)}}"
      class="item" 
      v-for="(item, index) in musicData" 
      :key="index"
      :class="{'clear-padding': index%3 !== 1}"
      >
        <div class="img-warpper">
          <img :src="item.picUrl" alt />
        </div>
        <div class="main">{{item.name}}</div>
       
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '../../api'
export default {
    data(){
        return{
            musicData:[]
        }
    },
   
    mounted() {
    api.getNewsong().then((res) => {
     
      for (var i = 0; i < res.data.result.length; i++) {
        var temp = {
          name: res.data.result[i].name,
          id: res.data.result[i].id,
          picUrl: res.data.result[i].picUrl,
          
        };
        this.musicData.push(temp);
      }
    });
  },
}
</script>

<style scoped>
.collection-block {
  background-color: #f8f8f8;
  padding: 5px 0;
}

.block-padding {
  padding: 10px 17px;
  background-color: #fff;
}

.title {
  display: flex;
  margin: 14px 0 18px;
}

.title h3 {
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list {
  width: 100%;
}

.list .item {
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding {
  padding: 0 !important;
}

.main {
  margin-top: 4px;
  font-size: 12px;
}

.gray {
  font-size: 12px;
  color: #999;
}

.btn-more {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>