import { http, HttpResponse } from 'msw';
import { mockPlaygroundApi } from '../utils';

export const testingHandlers = [
  http.get(mockPlaygroundApi('/mocking'), async () => {
    return HttpResponse.json([]);
  }),
  http.get(mockPlaygroundApi('/mocking/:id'), ({ params }) => {
    return HttpResponse.json([]);
  }),
  http.get(mockPlaygroundApi('/mocking'), ({ request }) => {
    // const url = new URL(request.url);
    // const name = url.searchParams.get('name') as string;

    return HttpResponse.json([]);
  }),
];
