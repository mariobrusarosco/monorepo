import {
  useAddToCart,
  useCart,
  useLogin,
  useLogout,
  useUser,
} from '../context/shopping-cart/context';

const AuthActions = () => {
  const logout = useLogout();
  const login = useLogin();
  // const { login, logout } = useShoppingCart();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthArea = () => {
  const user = useUser();
  // const { user } = useShoppingCart();

  return (
    <div>
      <h3>Auth Area</h3>
      <p>User: {user}</p>
    </div>
  );
};

const AddToCartSection = () => {
  const addToCart = useAddToCart();
  // const { addToCart } = useShoppingCart();

  return (
    <div>
      <h3>Add to Cart</h3>
      <button onClick={() => addToCart && addToCart('item 1')}>
        Add item 1
      </button>
      <button onClick={() => addToCart && addToCart('item 2')}>
        Add item 2
      </button>
    </div>
  );
};

const CartDisplay = () => {
  const cart = useCart();
  // const { cart } = useShoppingCart();

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart?.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

const UsingWithCustomHook = () => {
  return (
    <div>
      <h2>With Context</h2>
      <AuthArea />
      <AuthActions />
      <AddToCartSection />
      <CartDisplay />
    </div>
  );
};

export { UsingWithCustomHook };
