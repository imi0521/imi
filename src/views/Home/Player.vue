<template>
  <div class="play">
      <!-- 头部 -->
     <div class="header">
         <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ name }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
     </div>
     <!-- 歌曲信息 -->
      <div class="song-info">
           <div class="song-info-img">
                <img :src="decodeURIComponent(image)" alt />
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
      </div>
      <!-- 播放部分 -->
       <div class="song">
           <LRC :id="id" :currentTime="currentTime"/>
            <audio ref="player" controls :src="playerData.url"></audio>
       </div>
  </div>
</template>

<script>
import api from '../../api'
import LRC from '../LRC.vue'
export default {
    name:'Player',
    data(){
        return{
            playerData:{},
             currentTime:0
        }
    },
    components:{
        LRC
    },
    props:{
        id:{
            type:[String,Number],
            required:true
        },
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    },
    mounted(){
        api.getPlayer({
            id:this.id
        }).then(res=>{
            this.playerData = res.data.data[0]
            console.log(res.data)
        });
         this.addEventTimeUpdate();
        // console.log(this.id,this.name,decodeURIComponent(this.image));
    },
    methods:{
        addEventTimeUpdate(){
            this.$refs.player.addEventListener('timeupdate',this.currentTimeHandle)
        },
         removeEventTimeUpdate(){
            this.$refs.player.removeEventListener('timeupdate',this.currentTimeHandle)
        },
        currentTimeHandle(){
            this.currentTime = this.$refs.player.currentTime;
        }

    }

}
</script>

<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
audio{
    outline: none;
}
</style>