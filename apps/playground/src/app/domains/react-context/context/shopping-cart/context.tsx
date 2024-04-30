import { createContext, useContext, useState } from 'react';

type ShoppingCartContextType = {
  user: string;
  login: () => void;
  logout: () => void;
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  cart: { item: string }[];
};

const useContextStore = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState<{ name: string }[]>([]);

  return {
    user,
    login: () => setUser('Mario'),
    logout: () => setUser(null),
    addToCart: (item) => setCart([...cart, { name: item }]),
    removeFromCart: (item) => setCart(cart.filter((i) => i !== item)),
    cart,
  };
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);
export const ShoppingCartProvider = ({ children }) => {
  const store = useContextStore();
  return (
    <ShoppingCartContext.Provider value={store}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      'useShoppingCart must be used within a ShoppingCartProvider'
    );
  }
  return context;
};

export const useUser = () => useShoppingCart().user;
export const useLogin = () => useShoppingCart().login;
export const useLogout = () => useShoppingCart().logout;
export const useCart = () => useShoppingCart().cart;
export const useAddToCart = () => useShoppingCart().addToCart;
