import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="p-6 fixed top-0 w-full z-10 text-center">
      <NavLink className={({ isActive }) => isActive ? "active-nav-link" : "mx-4"} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active-nav-link" : "mx-4"} to="/page1">
        Page 1
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "active-nav-link" : "mx-4"} to="/page2">
        Page 2
      </NavLink>
    </nav>
  );
};

export default Header;
