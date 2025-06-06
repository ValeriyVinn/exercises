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
          <a href="/vanilla/html-css/html-css.html" className={css.navLink}>
            HtmlCss
          </a>
        </li>
        <li className={css.navItem}>
          <a href="/vanilla/java-script/java-script.html" className={css.navLink}>
            JavaScript
          </a>
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
