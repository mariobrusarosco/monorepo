import { QueryFuncionsOtherThanFetchOrRequests } from '../components/query-funcions-other-than-fetch-or-requests.tsx';
import { RefetchWhenVarChanges } from '../components/refetch-when-var-changes';

export const ReactQuery = () => {
  return (
    <div>
      <h1>React Query</h1>

      <RefetchWhenVarChanges />
      <QueryFuncionsOtherThanFetchOrRequests />
    </div>
  );
};
