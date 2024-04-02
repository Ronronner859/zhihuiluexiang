<script setup lang="ts">
import ZhyfSwiper from '@/components/ZhyfSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
// 保存轮播图的数据
const BannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  // (property) Data<unknown>.result: unknown
  BannerList.value = res.result
}
// 页面加载的时候 onLoad加载
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
    <!-- 分类面板 -->
    <CategoryPanel />
    <view class="index"></view>
  </div>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
