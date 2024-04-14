<script setup lang="ts">
import { useMemberStore } from '@/stores'

import { http } from '@/utils/http'
import { h } from 'vue'
const memberStore = useMemberStore()
// TODO:http
const getData = async () => {
  //! 异步
  const res = await http<string[]>({
    method: 'GET',
    url: '',
    header: {},
  })

  console.log('请求成功', res.code)
}
const onLogin = () => {
  // 在 onLogin 事件处理函数中，使用小程序的路由跳转功能跳转到登录页面
  wx.navigateTo({
    url: '/pages/login/login', // 假设登录页面的路径为 '/pages/login/login'
  })
}
</script>

<template>
  <view class="my">
    <button @tap="onLogin" size="default">登录</button>
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: 'hello world',
          token: '12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="warn">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
