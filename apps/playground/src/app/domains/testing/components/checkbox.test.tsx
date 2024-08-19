import { screen } from '@testing-library/react';
import { setupAndRender } from '../utils';
import { Checkbox } from './checkbox';

describe('[UNIT] Domain | Testing | Components | checkbox', () => {
  it('starts unchecked', () => {
    setupAndRender(<Checkbox label="Select me!" />);

    // expect(
    //   screen.getByRole('checkbox', { name: 'Select me! not checked' })
    // ).not.toBeChecked();
  });

  describe('when unchecked', () => {
    describe('and clicked', () => {
      it('displays the expected text', async () => {
        const { user } = setupAndRender(<Checkbox label="Select me!" />);

        await user.click(
          screen.getByRole('checkbox', { name: 'Select me! not checked' })
        );

        expect(screen.getByRole('checkbox', { name: 'Select me! checked' }));
      });
    });
  });

  describe('when checked', () => {
    describe('and clicked', () => {
      it('displays the expected text', async () => {
        const { user } = setupAndRender(<Checkbox label="Select me!" />);

        await user.click(
          screen.getByRole('checkbox', { name: 'Select me! not checked' })
        );

        await user.click(
          screen.getByRole('checkbox', { name: 'Select me! checked' })
        );

        expect(
          screen.getByRole('checkbox', { name: 'Select me! not checked' })
        );
      });
    });
  });
});
