import { http } from '@/utils/http'
/**
 * 首页广告区域数据
 * @param distributionSite
 * @returns
 */
export const getHomeBannerApi = (distributionSite = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
