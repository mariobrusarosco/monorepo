import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const suspensify = () => {};

const suspenser = () => {};

const Hello = React.lazy(
  () =>
    new Promise((_, reject) => {
      setTimeout(() => {
        // resolve(import('./hello'));
        reject('Simulating an async error');
      }, 2000);
    })
);

const FailedComponent = React.lazy(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Simulating a component that hast failed to load');
      }, 700);
    })
);

const SuccessComponent = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve({ default: () => <p>[Fake] Lazy Loaded Component</p> }),
        1000
      );
    })
);

const FallbackComponent = ({ error }: { error: Error }) => {
  console.log('error', error);
  return (
    <div role="alert">
      <p>Ops! Something went wrong. The reason is:</p>
      <pre style={{ color: 'red' }}>{error}</pre>
    </div>
  );
};

function LazyComponents() {
  return (
    <div>
      <h2>Lazy Components</h2>
      <p>
        This component is lazy loaded using the `React.lazy` function. This
        allows us to split our code into smaller bundles that can be loaded on
        demand.
      </p>

      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FailedComponent />
        </React.Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <SuccessComponent />
        </React.Suspense>
      </ErrorBoundary>

      {/* <button></button> */}
    </div>
  );
}

export { LazyComponents };
