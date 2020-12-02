<template>
  <div>搜索之后
    <!-- 参数要双向绑定 -->
     <el-backtop ></el-backtop>
    <input type="text" v-model="mod" value="输入">
    <button @click="coden">按钮</button>
    <!-- 渲染 -->
    <ul>
      <router-link
      tag="li"
        :to="{name:'Player',params:{id:item.id, name:item.name, image:encodeURIComponent(item.artists[0].img1v1Url)}}"
        v-for="(item,index) in msg"
        :key="index"

      >{{item.name}}  <span class="nbsp">{{item.artists[0].name}}</span> 
      </router-link>
     
    </ul>
  </div>
</template>

<script>
import api from '../../api'
export default {
    name:'Sousuo',
    data(){
        return{
        //  定义形参
          mod:'',
          // 定义空数组，接收数据
          msg:[]

        }

    },
    methods:{
        coden(){
          // 取api传过来的数据
          api.getSearch(this.mod).then(res=>{
              console.log(res.data.result.songs);
              // 存储
              this.msg = res.data.result.songs
          })
        }
    }

}
</script>

<style>
.nbsp{
  margin-left: 20px;
}
li{
  line-height: 50px;
}
</style>