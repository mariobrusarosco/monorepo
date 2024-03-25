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
