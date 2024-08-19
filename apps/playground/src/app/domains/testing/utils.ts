import userEvent from '@testing-library/user-event';
import { RenderOptions, render } from '@testing-library/react';

export const setupAndRender = (
  jsxElement: React.ReactElement,
  renderOptions: RenderOptions = {}
) => {
  return {
    user: userEvent.setup(),
    ...render(jsxElement, renderOptions),
  };
};

export const mockPlaygroundApi = (path: string) => {
  return `${import.meta.env.SOME_DOT_ENV}${path}`;
};

export const setApiMockingWhenInDevMode = async (
  {
    disable,
  }: {
    disable: boolean;
  } = { disable: false }
) => {
  try {
    if (disable || process.env.NODE_ENV !== 'development') return;

    // const { worker } = await import(
    //   '../../mocks/mocking-on-browser-controller'
    // );

    // await worker.start();
  } catch (e) {
    console.error(e);
  }
};
