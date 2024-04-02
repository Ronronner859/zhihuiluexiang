import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 * 首页广告区域数据
 * @param distributionSite
 * @returns
 */
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
/**
 * 前台首页分类
 */
export const getHomeCategoryApi = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
