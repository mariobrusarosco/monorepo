import { render } from '@testing-library/react';

import Mocking from './mocking';

describe('Mocking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mocking />);
    expect(baseElement).toBeTruthy();
  });
});
