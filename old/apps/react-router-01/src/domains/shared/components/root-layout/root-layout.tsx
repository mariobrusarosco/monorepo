import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <i style={{ color: 'red' }}>root layout</i>
      <Outlet />
    </div>
  );
};

export default RootLayout;
