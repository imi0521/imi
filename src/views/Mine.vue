<template>
  <div class="container">
    <!-- <input type="text" v-model="phone" />
    <input type="text" v-model="password"/>
    <button @click="loginHandle">登录</button>
    <van-button type="primary">主要按钮</van-button> -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 调用接口
import api from "../api";
import { Dialog } from 'vant';

export default {
  name: "Mine",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      api.login(this.phone, this.password).then((res) => {
        console.log(res.data);
       if(res.data.code === 200){
          Dialog.alert({
          title: "登录状态",
          message: "登录成功",
        }).then(() => {
          // on close
        });
       }else{
          Dialog.alert({
          title: "登录状态",
          message: "登录失败",
        }).then(() => {
          // on close
        });
       }
      });
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #000;
}
.container {
  /* margin-top:200px */
}
</style>