import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="vanilla-js" className={css.navLink}>
            Vanila Java Script
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="react" className={css.navLink}>
            React
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="redux" className={css.navLink}>
            Redux
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="node-js" className={css.navLink}>
            Node JS
          </NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
