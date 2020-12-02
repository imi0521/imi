import axios from '../utils/request'

const base = {
    baseUrl:"http://iwenwiki.com:3000",
    recommend:"/recommend/resource",//推荐歌单
    login:"/login/cellphone",//登录
    newsong:"/personalized/newsong" ,//推荐歌曲
    Dj:"/dj/recommend/type" ,//电台
    Details:"/playlist/detail",//歌单详情
    player:"/song/url",//播放
    lrc:"/lyric",//歌词
    search:"/search"//搜索
}
const api = {
    // 登录
    login(phone,password){
        return axios.get(base.baseUrl + base.login + "?phone=" +phone +"&password=" + password)
    },
    /* 
        推荐歌单
    */
   getRecommend(){
       return axios.get(base.baseUrl + base.recommend)
   },
   /* 
        推荐歌曲
   */
  getNewsong(){
        return axios.get(base.baseUrl + base.newsong)
  },
  /* 
        电台推荐
  */
  getdj(type){
      return axios.get(base.baseUrl + base.Dj +"?type="+type)
  },
  /* 
        歌单详情
  */
 getDetails(params){
     return axios.get(base.baseUrl + base.Details,{params})
 },
 /* 
        播放
 */
getPlayer(params){
    return axios.get(base.baseUrl + base.player,{params})
},
/* 
    歌词
*/
getLrc(params){
    return axios.get(base.baseUrl + base.lrc ,{params})
},
/* 
    搜索
*/
getSearch(keywords){
    return axios.get(base.baseUrl + base.search +"?keywords=" + keywords)
}

}
export default api
