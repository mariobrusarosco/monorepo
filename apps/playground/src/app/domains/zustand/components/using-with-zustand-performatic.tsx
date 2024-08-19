import {
  useLogin,
  useLogout,
  useUser,
  useAddToCart,
  useCart,
} from '../../react-context/context/shopping-cart/zustand';

const AuthActions = () => {
  const login = useLogin();
  const logout = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthArea = () => {
  const user = useUser();

  return (
    <div>
      <h3>Auth Area</h3>
      <p>User: {user}</p>
    </div>
  );
};

const AddToCartSection = () => {
  const addToCart = useAddToCart();

  return (
    <div>
      <h3>Add to Cart</h3>
      <button onClick={() => addToCart('item 1')}>Add item 1</button>
      <button onClick={() => addToCart('item 2')}>Add item 2</button>
    </div>
  );
};

const CartDisplay = () => {
  const cart = useCart();

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map(({ item }, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const UsingWithZustandPerformatic = () => {
  return (
    <div>
      <h2> With Zustand (Performatic)</h2>
      <AuthArea />
      <AuthActions />
      <AddToCartSection />
      <CartDisplay />
    </div>
  );
};

export { UsingWithZustandPerformatic };
