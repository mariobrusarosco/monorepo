import { useEffect, useState } from 'react';

const Cleanup = () => {
  const [effect, setEffect] = useState(1);

  useEffect(() => {
    console.log(
      `%c Creating effect #${effect}!`,
      'color: orange; font-size: 16px;'
    );
    // console.log(
    //   `%c A new useEffect of number #${effect} was created!`,
    //   'color: orange; font-size: 16px;'
    // );

    return () => {
      console.log(
        `%c Killing effect #${effect}!`,
        'color: tomato; font-size: 16px;'
      );
      // console.log(
      //   `%c You're about to create a new Effect. So, I'm calling this function to inform that useEffect #${effect} will no longer exists!`,
      //   'color: tomato; font-size: 16px;'
      // );
    };
  }, [effect]);

  return (
    <>
      <h2>
        Perform actions at the beginning and at the end of a useEffect (Cleanup)
      </h2>
      <p>Effect: {effect}</p>
      <button onClick={() => setEffect((prev) => prev + 1)}>
        Create new Effect
      </button>
    </>
  );
};

const CancellingEffectsViaCleanup = () => {
  const [effects, setEffects] = useState([
    {
      id: 1,
      status: 'active',
    },
  ]);
  const activeEffect = effects.find((effect) => effect.status === 'active');
  const handleNewEffect = (effectStatus: boolean) => {
    setEffects((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        active: effectStatus,
      },
    ]);
  };

  useEffect(() => {
    let effectStatus = 'active';

    // console.log('useEffect id: ', effect);

    setTimeout(() => {
      if (effectStatus === 'cancelled') {
        return console.log(
          `%cCancelling Effect #${activeEffect?.id}, because another Effect was triggered right after this one`,
          'color: orange; font-size: 16px;'
        );
      }

      return console.log(
        `%cThe Effect #${activeEffect?.id} wasn't cancelled, so after 3s this massage logged!`,
        'color: tomato; font-size: 16px;'
      );
    }, 3000);

    return () => {
      console.log(
        `%c Setting Effect #${activeEffect?.id} as cancelled. From 3s to now, you'll see an orange message!`,
        'color: lightblue; font-size: 16px;'
      );
      effectStatus = 'cancelled';
    };
  }, [activeEffect?.id]);

  return (
    <>
      <ul>
        {effects.map((effect, index) => {
          return <li key={index}>Effect #{effect.id}</li>;
        })}
      </ul>
      <button onClick={handleNewEffect}>Create a New Effect</button>
    </>
  );
};

const fetchData = async ({ postId }: { postId: string }) => {
  return fetch(`jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((posts) => ({ posts }));
};

const DealingWithAsyncEffects = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [postId, setPostId] = useState('1');

  useEffect(() => {
    const handleFetchData = async () => {
      // Resetting previous states since the new fetchData may fail, may return a different array, etc.
      setLoading(true);
      setResults([]);

      const data = await fetchData({ postId });

      // Updating states that are related with the behavior of fetchData().
      setResults(data);
      setLoading(false);
    };

    handleFetchData();

    fetchData({ postId });
  }, [postId]);

  return (
    <div>
      <h2>Dealing with Async Effects</h2>

      <p>
        Changing this input field, will change a <strong>postId</strong> state.{' '}
        <strong>postId</strong>is being watched by an useEffect. let's say we
        change the input with a "2" string. When "2" is recognized as a new
        value for <b>postId</b>, React will call a new useEffect. We need this
        because now we need a new version of <b>handleFetchData</b>: A version
        that will have pass "2" to <b>fetchData()</b>
      </p>
    </div>
  );
};

export { Cleanup, CancellingEffectsViaCleanup, DealingWithAsyncEffects };
