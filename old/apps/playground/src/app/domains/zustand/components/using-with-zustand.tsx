import { useCartStore } from '../../react-context/context/shopping-cart/zustand';

const AuthActions = () => {
  const { login, logout } = useCartStore();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthArea = () => {
  const { user } = useCartStore();

  return (
    <div>
      <h3>Auth Area</h3>
      <p>User: {user}</p>
    </div>
  );
};

const AddToCartSection = () => {
  const { addToCart } = useCartStore();

  return (
    <div>
      <h3>Add to Cart</h3>
      <button onClick={() => addToCart('item 1')}>Add item 1</button>
      <button onClick={() => addToCart('item 2')}>Add item 2</button>
    </div>
  );
};

const CartDisplay = () => {
  const { cart } = useCartStore();

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map(({ item }) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const UsingWithZustand = () => {
  return (
    <div>
      <h2>With Zustand</h2>
      <AuthArea />
      <AuthActions />
      <AddToCartSection />
      <CartDisplay />
    </div>
  );
};

export { UsingWithZustand };
