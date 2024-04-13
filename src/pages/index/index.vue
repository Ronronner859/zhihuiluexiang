<script setup lang="ts">
import ZhyfSwiper from '@/components/ZhyfSwiper.vue'
// import XtxGuess from './components/XtxGuess.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { getHomeBannerApi, getHomeHotApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import { getHomeCategoryApi } from '../../services/home'
import type { XtxGuessInstance } from '@/types/component'
// import { CategoryItem } from '../../types/home'
// 获取轮播图的数据
const BannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  // (property) Data<unknown>.result: unknown
  BannerList.value = res.result
  console.log(BannerList.value)
}

// 获取前台分类的数据
const CategoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const res = await getHomeCategoryApi()
  console.log('result:', res.result)
  CategoryList.value = res.result
  console.log(CategoryList.value)
}

// 热门推荐
const HotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotApi()
  console.log(res.result)

  HotList.value = res.result
}
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 下拉刷新
const istriggered = ref(false)
const onRefresherrefresh = async () => {
  istriggered.value = true
  // await getHomeBannerData()
  // await getCategoryList()
  // await getHomeHotData()
  // TODO: Promise.all
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerApi(),
    getCategoryList(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  istriggered.value = false
}
// 是否加载中
const isLoading = ref(false)

// 页面加载的时候 onLoad加载 相当于mounted
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getCategoryList(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <!-- 滚动栏 -->
  <scroll-view
    refresher-enabled
    :refresher-triggered="istriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <ZhyfSwiper :list="BannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="CategoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="HotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}
.scroll-view {
  flex: 1;
}
</style>
