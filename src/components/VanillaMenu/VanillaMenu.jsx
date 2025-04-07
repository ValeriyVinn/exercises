// import { useEffect, useState } from "react";

// export default function VanillaMenu() {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.BASE_URL}data/vanilla-tasks.json`)
//       .then((res) => res.json())
//       .then((data) => setMenu(data))
//       .catch((error) => console.error("Error loading menu:", error));
//   }, []);

//   const renderTasks = (tasks) => (
//     <ul>
//       {tasks.map((task, i) => (
//         <li key={i}>
//           <a
//             href={`${import.meta.env.BASE_URL}${task.path}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {task.title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );

//   const renderChildren = (children) => (
//     <ul>
//       {children.map((child, i) => (
//         <li key={i}>
//           <strong>{child.title}</strong>
//           {child.tasks && renderTasks(child.tasks)}
//           {child.children && renderChildren(child.children)}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div style={{ padding: "5px" }}>
//       <h2>Vanilla JavaScript Examples</h2>
//       <ol>
//         {menu.map((section, idx) => (
//           <li key={idx}>
//             <strong>{section.title}</strong>
//             {section.children && renderChildren(section.children)}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

export default function VanillaMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/vanilla-tasks.json`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  const renderLink = (title, path) => (
    <a
      href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
      target={path ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );

  const renderTasks = (tasks) => (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>{renderLink(task.title, task.path)}</li>
      ))}
    </ul>
  );

  const renderChildren = (children) => (
    <ul>
      {children.map((child, i) => (
        <li key={i}>
          {renderLink(child.title, child.path)}
          {child.tasks && renderTasks(child.tasks)}
          {child.children && renderChildren(child.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: "5px" }}>
      <h2>Vanilla JavaScript Examples</h2>
      <ol>
        {menu.map((section, idx) => (
          <li key={idx}>
            {renderLink(section.title, section.path)}
            {section.children && renderChildren(section.children)}
          </li>
        ))}
      </ol>
    </div>
  );
}
