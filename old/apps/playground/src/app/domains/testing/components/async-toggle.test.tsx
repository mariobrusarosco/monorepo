import { waitFor } from '@testing-library/react';
import { setupAndRender } from '../utils';
import { screen } from '@testing-library/react';
import { AsyncToggle } from './async-toggle';

describe('[UNIT] Domain | Testing | Components | async-Toggle', () => {
  describe('when rendering', () => {
    it('starts with the content hidden and when clicked it displays the content', async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
      const { user } = setupAndRender(<AsyncToggle />);

      await user.click(screen.getByText(/async toggle/i));
      vi.runOnlyPendingTimers();

      await waitFor(() =>
        expect(screen.getByText(/async hello!/i)).toBeInTheDocument()
      );
      vi.useRealTimers();
    });
  });
});
