import htmlCssMenu from "./menu-data/html-css.json";

export default function HtmlCssMenu() {
  const renderLink = (title, path) => (
    <a
      href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );

  const renderTasks = (tasks) => {
    if (!Array.isArray(tasks) || tasks.length === 0) return null;
    return (
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{renderLink(task.title, task.path)}</li>
        ))}
      </ul>
    );
  };

  const renderChildren = (children) => {
    if (!Array.isArray(children) || children.length === 0) return null;
    return (
      <ul>
        {children.map((child, i) => (
          <li key={i}>
            {renderLink(child.title, child.path)}
            {renderTasks(child.tasks)}
            {renderChildren(child.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ padding: "5px" }}>
      {/* <h2>Html - Css</h2> */}
      {/* <ol>
        {htmlCssMenu.map((section, idx) => (
          <li key={idx}>
            {renderLink(section.title, section.path)}
            {renderChildren(section.children)}
          </li>
        ))}
      </ol> */}
      <a href="/vanilla/html-css/html-css.html">Html-css Home</a>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import styles from "./HtmlCss.module.css";

// export default function HtmlCssMenu() {
//   const [menuData, setMenuData] = useState([]);

//   const LOCAL_API_URL = "http://localhost:5000/api/menu/html-css";
//   const REMOTE_API_URL = "https://exercises-backend.onrender.com/api/vanilla";
//   const isLocalhost =
//     location.hostname === "localhost" || location.hostname === "127.0.0.1";
//   const fileKey = "html-css";
//   const API_URL = isLocalhost ? LOCAL_API_URL : `${REMOTE_API_URL}/${fileKey}`;

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setMenuData(data))
//       .catch((err) => console.error("Failed to load menu data", err));
//   }, []);

//   // const renderLink = (title, path, className = styles.submenuLink) => (
//   //   <a
//   //     href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
//   //     className={className}
//   //     rel="noopener noreferrer"
//   //   >
//   //     {title}
//   //   </a>
//   // );
//   const renderLink = (title, path, className = styles.submenuLink) => (
//     <a
//       href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
//       className={className}
//       rel="noopener noreferrer"
//     >
//       {title}
//     </a>
//   );

//   const renderTasks = (tasks) => {
//     if (!Array.isArray(tasks) || tasks.length === 0) return null;
//     return (
//       <ul className={styles.taskList}>
//         {tasks.map((task, i) => (
//           <li key={i} className={styles.taskItem}>
//             {renderLink(task.title, task.path, styles.taskLink)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const renderChildren = (children) => {
//     if (!Array.isArray(children) || children.length === 0) return null;
//     return (
//       <ul className={styles.submenu}>
//         {children.map((child, i) => (
//           <li key={i}>
//             <span className={styles.submenuTitle}>{child.title}</span>
//             {renderTasks(child.tasks)}
//             {renderChildren(child.children)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div style={{ padding: "5px" }}>
//       <h2>Html - Css</h2>
//       <ol className={styles.menuList}>
//         {menuData.map((section, idx) => (
//           <li key={idx} className={styles.menuGroup}>
//             <span className={styles.menuTitle}>{section.title}</span>
//             {renderChildren(section.children)}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }
