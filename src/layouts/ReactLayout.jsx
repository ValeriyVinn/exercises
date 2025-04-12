import { NavLink, Outlet } from "react-router-dom";
import css from "./ReactLayout.module.css";

const ReactLayout = () => {
  return (
    <div className={css.reactPage}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="a" className={css.navLink}>
            Компоненти та колекції. Стилізація
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="b" className={css.navLink}>
            Події та стан. Форми
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="c" className={css.navLink}>
            Життєвий цикл компонента. Робота з REST API
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="d" className={css.navLink}>
            Хуки
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="e" className={css.navLink}>
            React Router. React router та поділ коду
          </NavLink>
        </li>
      </ul>
      <main className={css.reactMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default ReactLayout;
