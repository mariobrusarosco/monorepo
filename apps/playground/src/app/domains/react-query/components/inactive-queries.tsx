import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const inactiveQueriesKey = 'inactive-queries';
const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/?_limit=3'
  );
  const data = await response.json();

  return data;
};

const TodoDisplay01 = () => {
  const { data } = useQuery({
    queryKey: [inactiveQueriesKey],
    queryFn: fetchTodos,
    gcTime: 1000 * 7,
    staleTime: 1000 * 5,
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
    queryKey: [inactiveQueriesKey],
    queryFn: fetchTodos,
    gcTime: 1000 * 7,
    staleTime: 1000 * 5,
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

export const InactiveQueries = () => {
  const [showDisplayOne, setShowDisplayOne] = useState(true);
  const [showDisplayTwo, setShowDisplayTwo] = useState(true);

  return (
    <div>
      <h2>
        When there's no instance of useQuery() with the same query key in a
        Component or Hook that's rendered on the screen, React Query will set
        the query as 'inactive'. After some time (<b>gcTime</b> variable!), the
        query will be garbage collected.
      </h2>
      <section>
        <p>
          Remove both Components by clicking on both buttons! They will be
          removed from the DOM
        </p>
        <div>
          <button onClick={() => setShowDisplayOne(!showDisplayOne)}>
            {showDisplayOne ? 'Destroy' : 'Create'} Todos Displayer #1:{' '}
          </button>
          <p>{showDisplayOne ? <TodoDisplay01 /> : null}</p>
        </div>

        <div>
          <button onClick={() => setShowDisplayTwo(!showDisplayTwo)}>
            {showDisplayTwo ? 'Destroy' : 'Create'} Todos Displayer #2:{' '}
          </button>
          <p>{showDisplayTwo ? <TodoDisplay02 /> : null}</p>
        </div>

        {!showDisplayOne && !showDisplayTwo && (
          <p>
            No one is using the query: <strong>{inactiveQueriesKey}</strong>.
            After 7 seconds, cache for <strong>{inactiveQueriesKey}</strong>{' '}
            will be garbage collected.
          </p>
        )}
      </section>

      <section className="callout">
        <p>
          If we want to all instances of useQuery() with the same query key to
          have the same gcTime or staleTime, we have to set them equally in all
          instances. If one of them has a different value, the query will
          consider the default value of the QueryClient. That one created,
          usually, in the App component.
        </p>
      </section>
    </div>
  );
};
