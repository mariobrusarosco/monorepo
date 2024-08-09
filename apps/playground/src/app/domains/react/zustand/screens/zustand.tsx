import { UsingWithCustomHook } from '../../react/react-context/components/using-with-custom-hook';
import { UsingWithCustomHookPerformatic } from '../../react/react-context/components/using-with-custom-hook-performatic';
import { ShoppingCartProvider } from '../../react/react-context/context/shopping-cart/context';
import { ShoppingCartProviderPerf } from '../../react/react-context/context/shopping-cart/context-with-use-selector';
import { UsingWithZustand } from '../components/using-with-zustand';
import { UsingWithZustandPerformatic } from '../components/using-with-zustand-performatic';

const ZustandScreen = () => {
  return (
    <div>
      <h1>Zustand</h1>
      <UsingWithZustand />
      <UsingWithZustandPerformatic />

      <ShoppingCartProvider>
        <UsingWithCustomHook />
      </ShoppingCartProvider>

      <ShoppingCartProviderPerf>
        <UsingWithCustomHookPerformatic />
      </ShoppingCartProviderPerf>
    </div>
  );
};

export { ZustandScreen };
