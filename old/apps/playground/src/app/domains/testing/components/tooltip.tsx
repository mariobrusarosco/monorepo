import { useState } from 'react';

export const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTooltip = () => setIsVisible(false);
  const showTooltip = () => setIsVisible(true);

  return (
    <div>
      <span onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        Basic Tooltip
      </span>

      {isVisible ? <div>hello content</div> : null}
    </div>
  );
};
