import { DealingWithAsyncEffects } from '../components/use-effect';

export const UseEffectScreen = () => {
  return (
    <div>
      <h1>useEffect</h1>
      <h2>
        This is the useEffect page. You can find all the useEffect examples
        here.
      </h2>

      {/* <Cleanup /> */}
      {/* <CancellingEffectsViaCleanup /> */}
      <DealingWithAsyncEffects />
    </div>
  );
};
