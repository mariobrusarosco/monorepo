import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

type QueryKey = [string, { id: string; active: boolean }];

const fetchDynamicUser = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [key, { id, active }] = queryKey;
  console.log(key, id, active);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}?active=${active}`
  );
  const data = await response.json();

  return data;
};

type QueryKey2 = [string, string, boolean] | [string, boolean, string];

const fetchDynamicUser2 = async ({ queryKey }: { queryKey: QueryKey2 }) => {
  const [key, id, active] = queryKey;
  console.log(key, id, active);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}?active=${active}`
  );
  const data = await response.json();

  return data;
};

export const QueryKeysWithDynamicValues = () => {
  const [id, setId] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  // The two below queries are the same, but the order of the keys is different
  // It tests if the order of the keys matters. It doesn't matter
  const { data: dataOne } = useQuery({
    queryKey: ['object-keys', { active, id }],
    queryFn: fetchDynamicUser,
    enabled: !!id,
  });

  const { data: dataTwo } = useQuery({
    queryKey: ['object-keys', { id, active }],
    queryFn: fetchDynamicUser,
  });

  // The two below queries are the same, but the order of the keys is different
  // It tests if the order of the keys matters. It does matter in this case
  const { data: dataThree } = useQuery({
    queryKey: ['array-keys', active, id],
    queryFn: fetchDynamicUser2,
  });

  const { data: dataFour } = useQuery({
    queryKey: ['array-keys', id, active],
    queryFn: fetchDynamicUser2,
  });

  console.log({ dataOne, dataTwo, dataThree, dataFour, id, active });

  return (
    <div>
      <h2>Query keys with dynaminc values</h2>

      <button onClick={() => setId('1')}>set the user id</button>
      <button onClick={() => setActive(true)}>Active user</button>
    </div>
  );
};
