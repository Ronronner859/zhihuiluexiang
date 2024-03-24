// src/types/components.d.ts
import ZhyfSwiper from './ZhyfSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ZhyfSwiper: typeof ZhyfSwiper
  }
}
