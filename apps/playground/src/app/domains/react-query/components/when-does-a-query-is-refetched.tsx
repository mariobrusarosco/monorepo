import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const whenDoesAQueryIsRefetchedKey = 'when-does-a-query-is-refetched';
const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/?_limit=3'
  );
  const data = await response.json();

  return data;
};

const TodoDisplay01 = () => {
  const { data } = useQuery({
    queryKey: [whenDoesAQueryIsRefetchedKey],
    queryFn: fetchTodos,
    gcTime: 1000 * 7,
  });

  return (
    <div>
      Todos Displayer #1:{' '}
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

const TodoDisplay02 = () => {
  const { data } = useQuery({
    queryKey: [whenDoesAQueryIsRefetchedKey],
    queryFn: fetchTodos,
    gcTime: 1000 * 7,
  });

  return (
    <div>
      Todos Displayer #2:
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const WhenDoesAQueryIsRefetched = () => {
  const [showDisplayOne, setShowDisplayOne] = useState(true);
  const [showDisplayTwo, setShowDisplayTwo] = useState(false);

  return (
    <div>
      <h2>
        When does a React Query says "Hey, this <strong>query</strong>is old. I
        will call the query function again, fetch a server and if the returned
        data is different, I will update the cache and the UI"?
      </h2>

      <h4>New instances of the query mount</h4>

      <section>
        <div>
          <button onClick={() => setShowDisplayOne(!showDisplayOne)}>
            {showDisplayOne ? 'Destroy' : 'Create'} Toggle Display #1
          </button>
          <p>{showDisplayOne ? <TodoDisplay01 /> : null}</p>
        </div>

        <div>
          <button onClick={() => setShowDisplayTwo(!showDisplayTwo)}>
            {showDisplayTwo ? 'Remove' : 'Insert'} Toggle Display #2
          </button>
          <p>{showDisplayTwo ? <TodoDisplay02 /> : null}</p>
        </div>

        {!showDisplayOne && !showDisplayTwo && (
          <p>
            No one is using the query:{' '}
            <strong>{whenDoesAQueryIsRefetchedKey}</strong>. After 7 seconds,
            cache for <strong>{whenDoesAQueryIsRefetchedKey}</strong> will be
            garbage collected.
          </p>
        )}
      </section>

      <h4>The window is refocused</h4>
      <h4>The network is reconnected</h4>
    </div>
  );
};
