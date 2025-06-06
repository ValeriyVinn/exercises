import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import ReactMenu from "./ReactMenu"; // Імпортуємо меню React

const SharedLayout = () => {
  return (
    <div>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={css.navLink}>
            ToDoList
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="html-css" className={css.navLink}>
            HtmlCss
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="vanilla-js" className={css.navLink}>
            JavaScript
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="react" className={css.navLink}>
            React
          </NavLink>
          {/* Додаємо меню прямо тут */}
          <div className={css.reactMenu}>
            <ReactMenu />
          </div>
        </li>
        <li className={css.navItem}>
          <NavLink to="redux" className={css.navLink}>
            Redux
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="node-js" className={css.navLink}>
            NodeJS
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
