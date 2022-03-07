// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    searchHistory: uni.getStorageSync('search_history') || []
  },
  mutations: {
    setSearchHistory(state, record) {
      // array.includes(arrayItem)
      // 此数组方法: 如果array数组中存在子元素arrayItem, 则返回true, 反之返回false
      if (state.searchHistory.includes(record) === false) {
        state.searchHistory.push(record)
        uni.setStorageSync('search_history', state.searchHistory)
      }
    },
    clearSearchHistory(state) {
      state.searchHistory = []
      uni.removeStorageSync('search_history')
    }
  },
  actions: {},
  strict: true
})
// #endif

// #ifdef VUE3
// import { createStore } from 'vuex'
// const store = createStore({
//   modules: {
//     user
//   }
// })
// #endif

export default store