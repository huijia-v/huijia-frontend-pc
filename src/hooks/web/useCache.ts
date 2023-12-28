/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */

import WebStorageCache from 'web-storage-cache'

type CacheType = 'sessionStorage' | 'localStorage'
//todo      sessionStorage 当为sessionStorage 时，每次都会验证session
//todo      localStorage    当为此值时，session是local的，不会总是验证session
export const useCache = (type: CacheType = 'localStorage') => {
  const wsCache: WebStorageCache = new WebStorageCache({
    storage: type
  })

  return {
    wsCache
  }
}
