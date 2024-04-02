import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchDynamicUser = async (userId: string, active: boolean) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?active=${active}`
  );
  const data = await response.json();

  return data;
};

export const QueryKeysWithDynamicValues = () => {
  const [id, setId] = useState<null | string>(null);
  const [active, setActive] = useState<null | boolean>(null);

  const { data: dataOne } = useQuery({
    queryKey: ['object-keys', { active, id }],
    queryFn: fetchDynamicUser(id, active),
  });

  const { data: dataTwo } = useQuery({
    queryKey: ['object-keys', { id, active }],
    queryFn: () => fetchDynamicUser(id, active),
  });

  const { data: dataThree } = useQuery({
    queryKey: ['array-keys', active, id],
    queryFn: fetchDynamicUser(id, active),
  });

  const { data: dataFour } = useQuery({
    queryKey: ['array-keys', id, active],
    queryFn: fetchDynamicUser(id, active),
  });

  return (
    <div>
      <h2>Query keys with dynaminc values</h2>

      <button onClick={() => setId('1')}>set the user id</button>

      <button onClick={() => setActive(true)}>Active user</button>
    </div>
  );
};
