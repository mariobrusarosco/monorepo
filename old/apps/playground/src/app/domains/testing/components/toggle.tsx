import { useToogle } from '../hooks/use-toggle';

export const Toggle = () => {
  const { isVisible, toggle } = useToogle();

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      {isVisible && <h1>Hello!</h1>}
    </>
  );
};
