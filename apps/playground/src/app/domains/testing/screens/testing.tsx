import { Checkbox } from '../components/checkbox';
import { Toggle } from '../components/toggle';
import { Tooltip } from '../components/tooltip';

export const Testing = () => {
  return (
    <div>
      <Toggle />
      <Checkbox label="Select me!" />
      <Tooltip />
    </div>
  );
};
