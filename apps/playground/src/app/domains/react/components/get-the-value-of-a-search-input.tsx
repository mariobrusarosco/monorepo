import { FormEvent, useState } from 'react';

export const GetTheValueOfASearchInput = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // With "Elements"
    // const value = event.target.elements.search.value;

    // With Event
    // const value = (event.target as HTMLFormElement).search.value;

    // With Form Data
    const data = new FormData(event.target as HTMLFormElement);
    const value = String(data.get('search'));
    setSearch(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Get the value of a search input</h2>
      <input type="search" placeholder="search" name="search" />
      <p>search: {search}</p>
    </form>
  );
};
