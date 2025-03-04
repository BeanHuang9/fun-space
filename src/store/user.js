import { create } from 'zustand';
import { persist } from 'zustand/middleware';


// Local Storage（本地存儲） 和 Session Storage（會話存儲） 是 Web Storage API 的兩種機制
// 持久化 => 把數據存在 local storage
// 命名方式: use開頭 + 類別 + store
// 參數一：放狀態 參數二：開啟持久化
// 方法 => 將數據存進store => local storage

// Session Storage 一旦關閉瀏覽器 數據就會被刪除

export const useUserStore = create(persist((set) => ({
    token: '',
    setToken: (token) => set(()=>({token})),
}),{
    name:'user'
}))
