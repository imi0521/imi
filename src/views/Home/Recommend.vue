<template>
  <div class="collection-block">
    <div class="block-padding">
      <h3>歌单推荐</h3>
    </div>
    <div class="list clearfix">
      <!-- 每个item -->
      <router-link
        tag="div"
        :to="{name:'Details',params:{id:item.id}}"
        class="item"
        v-for="(item, index) in musicData"
        :key="index"
        :class="{ 'clear-padding': index % 3 !== 1 }"
      >
        <div class="img-warpper">
          <img :src="item.picUrl" alt />
        </div>
        <div class="main">{{ cutContent(item.name) }}</div>
        <div class="gray">{{ cutContent(item.copywriter) }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  data() {
    return {
      musicData: [],
    };
  },

  mounted() {
    api.getRecommend().then((res) => {
      //   console.log(res.data);
      for (var i = 0; i < res.data.recommend.length; i++) {
        var temp = {
          name: res.data.recommend[i].name,
          id: res.data.recommend[i].id,
          picUrl: res.data.recommend[i].picUrl,
          copywriter: res.data.recommend[i].copywriter,
        };
        this.musicData.push(temp);
      }
    });
  },
  methods: {
    cutContent(str) {
      if (str.length > 8) {
        //  字数长度    做切割
        return str.substring(0, 8) + "...";
      }
      return str;
    },
  },
};
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