<template>
   <tabs :currentIndex="currentIndex" @onChangeActive="getActiveIndex">
      <tab 
      :index="(index+1).toString()" 
      :label="title[index].name"
      v-for="(item,index) in categoryData"
      :key="index"
      >
        <ul class="list">
                    <li
                        class="song url"
                        v-for="(element, elIndex) in item.djRadios"
                        :key="elIndex"
                    >
                        <div class="poster">
                            <img :src="element.picUrl" alt />
                        </div>
                        <div class="info">
                            <div class="name">{{ element.desc }}</div>
                            <div class="author">{{ element.name }}</div>
                        </div>
                    </li>
        </ul>
       
      </tab>
     
    </tabs>

</template>

<script>
import api from '../../api'
import axios from 'axios'
export default {
    name:"TabsVue",
    data(){
        return{
            // 初始化
            currentIndex:"1",
            categoryData:[],
            title:[
                {
                    id:14,
                    name:'你好爱豆'
                },
                {
                    id:13,
                    name:'铃声'
                },
                {
                    id:3001,
                    name:'声音恋人'
                }
            ]
        }
    },
    methods:{
        getActiveIndex(index){
            this.currentIndex = index;

        }
    },
    mounted(){
        console.log(123);
        function getDj14(){
            return api.getdj(14)
        };
        function getDj6(){
            return api.getdj(13)
        };
        function getDj8(){
            return api.getdj(3001)
        };
        axios.all([getDj14(),getDj6(),getDj8()]).then(
            axios.spread((dj14,dj6,dj8)=>{
                this.categoryData.push(dj14.data,dj6.data,dj8.data)
            })
        )
    }
}
</script>

<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 450px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>