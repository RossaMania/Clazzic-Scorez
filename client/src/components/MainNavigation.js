import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scores"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Scores
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
