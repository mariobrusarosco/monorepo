import { useQuery } from '@tanstack/react-query';

type ILocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
async function getLocation(): Promise<ILocation> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const QueryFuncionsOtherThanFetchOrRequests = () => {
  const locationQuery = useQuery({
    queryKey: ['location'],
    queryFn: getLocation,
  });

  if (locationQuery.isLoading) {
    return <p>Calculating location...</p>;
  }

  if (locationQuery.error) {
    return <p>Error: {locationQuery.error.message}</p>;
  }

  return (
    <div>
      <h2>Dealing with data other than fetch or network requests </h2>
      <p>
        Your location is:
        {locationQuery.data?.coords.latitude}
        {locationQuery.data?.coords.longitude}
      </p>
    </div>
  );
};
