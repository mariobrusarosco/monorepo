import { useToogle } from '../hooks/use-toggle';

export const AsyncToggle = () => {
  const { isVisible, waitFourSecondsAndToggle } = useToogle();

  return (
    <>
      <button onClick={waitFourSecondsAndToggle}>async toggle</button>
      {isVisible && <h1>Async Hello!</h1>}
    </>
  );
};
