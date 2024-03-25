import { useState } from 'react';

export const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
      {label} {checked ? 'checked' : 'not checked'}
    </label>
  );
};
