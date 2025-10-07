import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';
import { NavLink, Outlet } from 'react-router-dom';

import { ColorEnum } from '@/enums/color.enum';

export const Layout = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px', backgroundColor: '#fff' }}>
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: ColorEnum.Tertiary500,
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: ColorEnum.Tertiary700,
              color: ColorEnum.White,
            },
          },
        }}
      >
        <MenuItem component={<NavLink to="/"></NavLink>}>Weather</MenuItem>
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
