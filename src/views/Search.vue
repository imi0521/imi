<template>
  <div>
    搜索
    <input type="text" v-model="mod" value="请输入内容"/>
    <button @click="sou">搜索</button>
    <ul>
      <router-link
        tag="li"
        :to="{name:'Player',params:{id:item.id,name:item.name,image:encodeURIComponent(item.artists[0].img1v1Url)}}"
        
        v-for="(item,index) in sert"
        :key="index"
      >{{item.name}} {{item.artists[0].name}}
      </router-link>
      <el-backtop ></el-backtop>
    </ul>
  </div>
</template>

<script>
// import api from '../api'

export default {
    name:"Search",
    data(){
      return{
          sert:[],
          mod:''
      }
    },
   
    methods:{
      sou(){
         api.getSearch(this.mod).then(res=>{
        console.log(res.data.result.songs);
          this.sert =res.data.result.songs;
          
        })
          
         
          

      }
    }
}
</script>

<style scoped lang='less'>
  input{
    width: 80%;
    height: 30px;
    border: 1px solid #000;
    border-radius: 10px;
  }
  ul{
     margin-top: 10px;
     line-height: 60px;
     li{
       border-bottom: 1px solid #333
      
     };
     img{
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 10px;
    padding-top: 5px;
  }
  }
  
</style>
