import { useEffect, useRef, useState } from 'react';
import './styles.css';

const StopwatchWithJsVariables = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  let interval: NodeJS.Timer | null = null;

  const toggleStopwatch = () => {
    if (!running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      setRunning(true);
    } else {
      if (interval !== null) {
        clearInterval(interval);
      }
      interval = null;
      setRunning(false);
    }
  };

  return (
    <div>
      <p>This will not work!</p>
      <button onClick={toggleStopwatch}>{running ? 'Pause' : 'Play'}</button>
      <span>{seconds}</span>
    </div>
  );
};

const StopwatchWithState = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  const toggleStopwatch = () => {
    if (!running) {
      const id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
      setRunning(true);
    } else {
      clearInterval(intervalId ?? '');
      setRunning(false);
      setIntervalId(null);
    }
  };

  return (
    <div>
      <p>
        This will work. But it may be considered as bad practice, or a mental
        model breaking.
      </p>
      <p>
        Some developers may worked based on a React Premise that:{' '}
        <i>
          We create a<b>state</b> when we need a dynamic value that when changes
          our View/Component needs to <b>re render</b>
        </i>
      </p>
      <p>
        For cases where we need a dynamic value, but when it changes, we don't
        need to <b>rerender</b>our View/Component, we use{' '}
        <b>a reference via useRef</b>
      </p>
      <button onClick={toggleStopwatch}>{running ? 'Pause' : 'Play'}</button>
      <span>{seconds}</span>
    </div>
  );
};

const StopwatchWithUseRef = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  const toggleStopwatch = () => {
    if (!running) {
      const id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      intervalId.current = id;
      setRunning(true);
    } else {
      clearInterval(intervalId.current ?? '');
      setRunning(false);
      intervalId.current = null;
    }
  };

  return (
    <div>
      <p>This will work and it's blessed by the Gods of the Front End.</p>
      <button onClick={toggleStopwatch}>{running ? 'Pause' : 'Play'}</button>
      <span>{seconds}</span>
    </div>
  );
};

const AcessingDomElements = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const displayRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const scrollIntoDisplay = () => {
    displayRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  return (
    <div>
      <h2>Accessing DOM Elements</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>

      <div ref={displayRef}>
        <button onClick={scrollIntoDisplay}>Scroll into Display</button>
        <p style={{ marginTop: '300px' }}>I am just dislaying some info</p>
      </div>
    </div>
  );
};

const WaitingForCSSAnimationsToEnd = () => {
  const [active, setActive] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const animating = useRef(false);

  const handleToggleAnimation = () => {
    console.log('animating', animating.current);

    if (animating.current === false) {
      setActive(!active);
    }
  };

  useEffect(() => {
    const getAllAnimations = async () => {
      animating.current = true;
      const animations = nodeRef.current?.getAnimations({
        subtree: true,
      });
      const promises = animations?.map((animation) => animation.finished) ?? [];
      await Promise.all(promises);
      animating.current = false;
    };

    getAllAnimations();
  });

  return (
    <div>
      <h2>Waiting for CSS Animations to End</h2>
      <div ref={nodeRef} className={`fancy-stuff ${active && 'active'}`}>
        This is some fancy stuff
      </div>
      <button onClick={handleToggleAnimation}>Animate</button>
    </div>
  );
};

export const UseRef = () => {
  return (
    <div>
      <h2>useRef</h2>
      <StopwatchWithJsVariables />
      <StopwatchWithState />
      <StopwatchWithUseRef />
      <AcessingDomElements />
      <WaitingForCSSAnimationsToEnd />
    </div>
  );
};
