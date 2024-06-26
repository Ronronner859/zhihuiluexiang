/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
// src/types/components.d.ts

import XtxGuess from '@/components/XtxGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxGuess: typeof XtxGuess
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>
