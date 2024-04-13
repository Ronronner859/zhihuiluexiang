// src/types/components.d.ts
import ZhyfSwiper from './ZhyfSwiper.vue'
import XtxGuess from './XtxGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ZhyfSwiper: typeof ZhyfSwiper
    XtxGuess: typeof XtxGuess
  }
}
