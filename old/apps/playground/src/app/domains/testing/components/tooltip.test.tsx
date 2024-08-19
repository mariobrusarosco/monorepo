import { screen } from '@testing-library/react';
import { setupAndRender } from '../utils';
import { Tooltip } from './tooltip';

describe('[UNIT] Domain | Testing | Components | tooltip', () => {
  describe.only('when hovering into tooltip', () => {
    it('displays the content', async () => {
      const { user } = setupAndRender(<Tooltip />);
      const tooltip = screen.getByText(/basic tooltip/i);
      const tooltipText = /hello content/i;

      // Asserting that the tooltip content is not visible
      expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();

      // assert that the tooltip content is visible when hovering
      await user.hover(tooltip);
      expect(screen.queryByText(tooltipText)).toBeInTheDocument();

      // assert that the tooltip content is not visible when unhovering
      await user.unhover(tooltip);
      expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
    });
  });
});
