import { NavLink, Outlet } from 'react-router-dom';

export const TablesScreen = () => {
  return (
    <>
      <h2>Available tables</h2>
      <div style={{ display: 'flex', gap: '100px' }}>
        <aside>
          <ul>
            <NavLink to="/tables/1">Table 1</NavLink>
            <NavLink to="/tables/2">Table 2</NavLink>
          </ul>
        </aside>

        <Outlet />
      </div>
    </>
  );
};
