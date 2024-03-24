<script setup lang="ts">
import ZhyfSwiper from '@/components/ZhyfSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
// 保存轮播图的数据
const BannerList = ref<BannerItemrItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  // (property) Data<unknown>.result: unknown
  BannerList.value = res.result
}
// 页面加载的时候
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <div>
    <!-- 导航栏 -->
    <CustomNavbar />
    <!-- 轮播图 -->
    <ZhyfSwiper :list="BannerList" />
    <view class="index">hello</view>
  </div>
</template>

<style lang="scss">
//
</style>
