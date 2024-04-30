import { create } from 'zustand';

type ShoppingCartContextType = {
  user: string;
  login: () => void;
  logout: () => void;
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  cart: { item: string }[];
};

export const useCartStore = create((set) => ({
  user: null,
  login: () => set({ user: 'Mario' }),
  logout: () => set({ user: null }),
  addToCart: (item: any) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item: any) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  cart: [],
}));

export const useLogin = () => useCartStore((state) => state.login);
export const useLogout = () => useCartStore((state) => state.logout);
export const useUser = () => useCartStore((state) => state.user);
export const useCart = () => useCartStore((state) => state.cart);
export const useAddToCart = () => useCartStore((state) => state.addToCart);
