/**
 * 商品详情
 * @param id 商品id
 */
import { http } from '@/utils/http'
export const getGoodsByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
