import { screen } from '@testing-library/react';
import { Toggle } from './toggle';
import { setupAndRender } from '../utils';

describe('[UNIT] Domain | Testing | Components | toggle', () => {
  describe('when clicking and the content is hidden', () => {
    it('displays the content', async () => {
      const { user } = setupAndRender(<Toggle />);

      await user.click(screen.getByText(/toggle/i));

      expect(screen.getByText(/hello!/i)).toBeInTheDocument();
    });
  });
});
