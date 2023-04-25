import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full">
      <div className="flex flex-row items-center justify-around h-[30vh]">
        <div className="flex w-24">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "mx-4"
            }
            to="/page1"
          >
            Page 1
          </NavLink>
        </div>
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[20vh] w-auto"
              aria-current="false"
            />
          </NavLink>
        </div>
        <div className="flex w-24">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "mx-4"
            }
            to="/page2"
          >
            Page 2
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
