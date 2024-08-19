import { useContextSelector, createContext } from 'use-context-selector';
import { useCallback, useState } from 'react';

type ShoppingCartContextType = {
  user: string;
  login: () => void;
  logout: () => void;
  addToCart: (item: string) => void;
  cart: { name: string }[];
};

const useContextStore = () => {
  const [user, setUser] = useState('');
  const [cart, setCart] = useState<{ name: string }[]>([{ name: 'item 1' }]);

  return {
    user,
    cart,
    login: useCallback(() => setUser('Mario'), []),
    logout: useCallback(() => setUser(''), []),
    addToCart: useCallback(
      (item: string) => setCart((prev) => [...prev, { name: item }]),
      []
    ),
  };
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProviderPerf = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ShoppingCartContext.Provider value={useContextStore()}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useUserPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.user);
export const useLoginPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.login);
export const useLogoutPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.logout);
export const useAddToCartPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.addToCart);
export const useCartPerf = () =>
  useContextSelector(ShoppingCartContext, (state) => state?.cart);
