<template>
  <div class="lrcContainer">
      <div class="lrc"  ref="lrc">
          <p :class="{'active': currentTime > allKeys[index] && currentTime <= allKeys[index+1]}" class="lrc-p" v-for="(item,index) in lrcData" :key="index">
          {{item}} {{getScroll(index)}}
          </p>
      </div>
  </div>
</template>

<script>
import api from '../api'
export default {
    name:'LRC',
    data(){
        return{
            lrcData:[],
            timeObj:{},
            allKeys:[]
        }
    },
    mounted(){
        api.getLrc({
            id:this.id
        }).then(res=>{
            console.log(res.data.lrc.lyric);
            // 整理歌词格式
            this.formateLrc(res.data.lrc.lyric)
    })
    },
    methods:{
        formateLrc(data){
            var lrcObj = {};
            if(!data)return;
            var lylrc = data.split("\n");
            console.log(lylrc);
            var regTime = /\[\d*:\d*(:|\.)\d*\]/g;
            // console.log(regTime);
            for(var i=0;i<lylrc.length; i++){
                // 切割时间
                var timeArr = lylrc[i].match(regTime);
                if(!timeArr)continue;
                // console.log(timeArr[0]); 
                // 保留文本
                var lrcContent =lylrc[i].replace(timeArr,"");
                console.log(lrcContent);
                this.lrcData.push(lrcContent);
                
                var t=timeArr[0];
                // 时间：分
                var min = Number(t.match(/\[\d*/i).toString().slice(1));
                var sec =  Number(t.match(/:\d*/i).toString().slice(1));
                var time = min*60 +sec;
                lrcObj[time] = lrcContent;
            }
            this.timeObj = lrcObj;
            // console.log(lrcObj);
            this.getAllKey(lrcObj)
        },
        getAllKey(lrcArr){
            // console.log(lrcArr);
            for(var key in lrcArr){
                this.allKeys.push(key)
            }
        },
        getScroll(index){
            if(this.currentTime > this.allKeys[index] && this.currentTime <= this.allKeys[index+1]){
               console.log(1111);
               console.log(this.$refs.lrc);
                this.$refs.lrc.style.top =-(30 *index) +'px' 
            }
        }
    
},

    props:{
        id:{
            type:[String,Number],
            required:true
        },
        currentTime:{
           type:[String,Number],
           d:0
        }
    }
}


</script>

<style scoped>
.active {
    color: rebeccapurple;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}

</style>