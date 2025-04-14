import { NavLink } from "react-router-dom";
import css from "./ReactLayout.module.css";
import reactMenu from "./menu-data/react.json";

export default function ReactMenu() {
  return (
    <ul className={css.navList}>
      {reactMenu.map((section, idx) => (
        <li key={idx} className={css.navItem}>
          <NavLink to={section.path} className={css.navLink}>
            {section.title}
          </NavLink>
          {section.tasks && (
            <ul>
              {section.tasks.map((task, i) => (
                <li key={i}>
                  <NavLink to={task.path} className={css.navLink}>
                    {task.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
