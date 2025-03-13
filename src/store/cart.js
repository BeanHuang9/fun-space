
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useCartStore = create(persist((set) => ({
    isCartOpen: false,
    setIsCartOpen: (open) => set(()=>({ isCartOpen: open })),
  }),{
      name:'cart'
  }))
