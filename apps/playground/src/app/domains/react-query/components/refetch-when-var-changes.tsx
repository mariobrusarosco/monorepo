import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchName = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();

  return data;
};

export const RefetchWhenVarChanges = () => {
  const [name, setName] = useState('John Doe');
  useQuery({
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
      <span>after clicking you should see another network request made</span>
    </div>
  );
};
