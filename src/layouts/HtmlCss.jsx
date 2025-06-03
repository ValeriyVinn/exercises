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
      <h2>Html - Css</h2>
      <ol>
        {htmlCssMenu.map((section, idx) => (
          <li key={idx}>
            {renderLink(section.title, section.path)}
            {renderChildren(section.children)}
          </li>
        ))}
      </ol>
    </div>
  );
}
// ---------------------------------------------------
// import React from "react";
// import htmlCssData from "./menu-data/html-css.json";

// const HtmlCssMenu = () => {
//   // Функція для побудови шляху до завдання
//   const buildPath = (section, child, task) => {
//     // Якщо є явний шлях — використовуємо його
//     if (task.path) return task.path;

//     // Якщо є slug у секції, підсекції та завданні — збираємо шлях за шаблоном
//     if (section.slug && child.slug && task.slug) {
//       return `vanilla/html-css/${section.slug}/${child.slug}/${task.slug}/${task.slug}.html`;
//     }

//     // Якщо нічого нема — повертаємо пустий рядок
//     return "";
//   };

//   // Функція для відображення посилання
//   const renderLink = (title, path) => (
//     <a
//       href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
//       rel="noopener noreferrer"
//     >
//       {title}
//     </a>
//   );

//   // Відображення списку завдань (tasks)
//   const renderTasks = (section, child, tasks) => {
//     if (!Array.isArray(tasks) || tasks.length === 0) return null;
//     return (
//       <ul>
//         {tasks.map((task, i) => {
//           const path = buildPath(section, child, task);
//           return <li key={i}>{renderLink(task.title, path)}</li>;
//         })}
//       </ul>
//     );
//   };

//   // Відображення підтем (child)
//   const renderChildren = (section, children) => {
//     if (!Array.isArray(children) || children.length === 0) return null;
//     return (
//       <ol>
//         {children.map((child, i) => (
//           <li key={i}>
//             <strong>{child.title}</strong>
//             {renderTasks(section, child, child.tasks)}
//           </li>
//         ))}
//       </ol>
//     );
//   };

//   // Відображення основних розділів (section)
//   return (
//     <div>
//       <h2>HTML & CSS Menu</h2>
//       <ol>
//         {htmlCssData.map((section, i) => (
//           <li key={i}>
//             <h3>{section.title}</h3>
//             {renderChildren(section, section.children)}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default HtmlCssMenu;

// --------------------------------------------------------------

// import { useEffect, useState } from "react";

// export default function HtmlCssMenu() {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.BASE_URL}data/menu/html-css.json`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch menu");
//         return res.json();
//       })
//       .then((data) => setMenuData(data))
//       .catch((err) => console.error("Error loading menu:", err));
//   }, []);

//   const renderLink = (title, path) => (
//     <a
//       href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
//       rel="noopener noreferrer"
//     >
//       {title}
//     </a>
//   );

//   const renderTasks = (tasks) => {
//     if (!Array.isArray(tasks) || tasks.length === 0) return null;
//     return (
//       <ul>
//         {tasks.map((task, i) => (
//           <li key={i}>{renderLink(task.title, task.path)}</li>
//         ))}
//       </ul>
//     );
//   };

//   const renderChildren = (children) => {
//     if (!Array.isArray(children) || children.length === 0) return null;
//     return (
//       <ul>
//         {children.map((child, i) => (
//           <li key={i}>
//             {renderLink(child.title, child.path)}
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
//       <ol>
//         {menuData.map((section, idx) => (
//           <li key={idx}>
//             {renderLink(section.title, section.path)}
//             {renderChildren(section.children)}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }
