

import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import ReactMenu from "./ReactMenu";

const isLocalhost =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const getVanillaHref = (path) => {
  return isLocalhost ? `/vanilla/${path}` : `vanilla/${path}`;
};

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
          <a
            href={getVanillaHref("html-css/html-css.html")}
            className={css.navLink}
          >
            HtmlCss
          </a>
        </li>
        <li className={css.navItem}>
          <a
            href={getVanillaHref("java-script/java-script.html")}
            className={css.navLink}
          >
            JavaScript
          </a>
        </li>
        <li className={css.navItem}>
          <a
            href={getVanillaHref("java-script/java-script.html")}
            className={css.navLink}
          >
            TypeScript
          </a>
        </li>
        <li className={css.navItem}>
          <NavLink to="react" className={css.navLink}>
            React
          </NavLink>
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
          <NavLink to="nextjs" className={css.navLink}>
            NextJS
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
