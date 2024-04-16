import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchName = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();

  return data;
};

export const RefetchWhenVarChanges = () => {
  const [name, setName] = useState('John Doe');

  // We are not using data to exemplify how a React State change can trigger a refetch
  const data = useQuery({
    queryKey: ['name', name],
    queryFn: fetchName,
  });

  return (
    <div>
      <h2>Refetching when a variable changes</h2>
      <p>Name: {name}</p>

      <button onClick={() => setName('Mario')}>
        Click here to change variable's value
      </button>
      <p>after clicking you should see another network request made</p>
      <p>
        Even if we are not using the returned value of a <b>userQuery</b>{' '}
        directly, if the state given as key changes...<b>React Query</b> will
        call the given <b>query function</b>{' '}
      </p>
    </div>
  );
};
