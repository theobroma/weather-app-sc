import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar>
      <Menu>
        <MenuItem component={<NavLink to="/"></NavLink>}>Home</MenuItem>
        <MenuItem component={<NavLink to="/grid"></NavLink>}> Grid</MenuItem>
        <MenuItem component={<NavLink to="/starter"></NavLink>}>Starter</MenuItem>
        <MenuItem component={<NavLink to="/dashboard"></NavLink>}>Dashboard</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ padding: 10 }}>
      <Outlet />
    </main>
  </div>
);
