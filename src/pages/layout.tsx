import { NavLink, Outlet } from 'react-router-dom';

type LinkActive = { isActive: boolean };

const isActiveLink = ({ isActive }: LinkActive) => `link ${isActive ? 'active' : ''}`;

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink className={isActiveLink} to="/">
          Home 🏠
        </NavLink>
        <NavLink className={isActiveLink} to="/grid">
          Grid||
        </NavLink>
        <NavLink className={isActiveLink} to="/starter">
          Starter||
        </NavLink>
      </nav>
      <hr className="divider" />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
