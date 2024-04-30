import { useContextSelector, createContext } from 'use-context-selector';
import { useCallback, useState } from 'react';

type ShoppingCartContextType = {
  user: string;
  login: () => void;
  logout: () => void;
  addToCart: (item: string) => void;
  cart: { item: string }[];
};

const useContextStore = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState<{ name: string }[]>([{ name: 'item 1' }]);

  return {
    user,
    cart,
    login: useCallback(() => setUser('Mario'), []),
    logout: useCallback(() => setUser(null), []),
    addToCart: useCallback(
      (item) => setCart((prev) => [...prev, { name: item }]),
      []
    ),
  };
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProviderPerf = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value={useContextStore()}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useUserPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state.user);
export const useLoginPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.login);
export const useLogoutPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.logout);
export const useAddToCartPerf = () =>
  useContextSelector(ShoppingCartContext, (s) => s.addToCart);
export const useCartPerf = () =>
  useContextSelector(ShoppingCartContext, (s) => s.cart);
