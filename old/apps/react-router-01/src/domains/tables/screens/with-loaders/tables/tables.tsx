import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

export const TablesScreen = () => {
  const { tables } = useLoaderData();

  return (
    <>
      <h2>Available tables</h2>
      <div style={{ display: 'flex', gap: '100px' }}>
        <aside>
          <ul>
            {tables.map((table: string) => (
              <li key={table}>
                <NavLink to={table.id}>{table.label}</NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <Outlet context={{ tables }} />
      </div>
    </>
  );
};
