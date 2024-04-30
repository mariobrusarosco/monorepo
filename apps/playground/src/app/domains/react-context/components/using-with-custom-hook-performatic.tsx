import {
  useAddToCartPerf,
  useCartPerf,
  useLoginPerf,
  useLogoutPerf,
  useUserPerf,
} from '../context/shopping-cart/context-with-use-selector';

const AuthActions = () => {
  const login = useLoginPerf();
  const logout = useLogoutPerf();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthArea = () => {
  const user = useUserPerf();

  return (
    <div>
      <h3>Auth Area</h3>
      <p>User: {user}</p>
    </div>
  );
};

const AddToCartSection = () => {
  const addToCart = useAddToCartPerf();

  return (
    <div>
      <h3>Add to Cart</h3>
      <button onClick={() => addToCart && addToCart('eita')}>Add</button>
    </div>
  );
};

const CartDisplay = () => {
  const cart = useCartPerf();

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

const UsingWithCustomHookPerformatic = () => {
  return (
    <div>
      <h2>With Context (Performatic)</h2>
      <AuthArea />
      <AuthActions />
      <AddToCartSection />
      <CartDisplay />
    </div>
  );
};

export { UsingWithCustomHookPerformatic };
