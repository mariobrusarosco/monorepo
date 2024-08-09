import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Opiton 1
const fetchDynamicUser = async ({ userId }: { userId: string }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return data;
};

// Opiton 2 (recommended)
const fetchDynamicUserRecommendedWay = async ({
  queryKey,
}: {
  queryKey: string[];
}) => {
  const [_, userId] = queryKey;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return data;
};

export const QueryFuncionsWithArguments = () => {
  const [userId, setUserId] = useState<string>('1');

  // Opiton 1
  // const { data } = useQuery({
  //   queryKey: ['passing-arguments', userId],
  //   queryFn: fetchDynamicUser({ userId }),
  // });

  /// Opiton 2 (recommended)
  const { data } = useQuery({
    queryKey: ['passing-arguments', userId],
    queryFn: fetchDynamicUserRecommendedWay,
  });

  return (
    <div>
      <h2>Query Funcions With Arguments</h2>

      <p>{data?.name}</p>
    </div>
  );
};
