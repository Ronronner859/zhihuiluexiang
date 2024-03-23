// 添加拦截器

import { useMemberStore } from "@/stores"


const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
    // 拦截前触发
    invoke(options:UniApp.RequestOptions){
        // 拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 请求超时
        options.timeout = 10000
        // 添加小程序端请求头标识
         options.header = {
            ...options.header,
            'source-client': 'miniapp'
         }   
        //  添加token
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if(token){
            options.header.Authorization = token
        }
        console.log(options);
        
    }
}
uni.addInterceptor('request',httpInterceptor)
uni.addInterceptor('uploadFile',httpInterceptor)