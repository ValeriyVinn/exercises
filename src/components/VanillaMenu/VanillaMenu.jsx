// const vanillaTasks = [
//   { title: "Array Map", path: "/vanilla/vanilla.html" },
//   { title: "DOM Events", path: "/vanilla/01-basics/basics.html" },
//   { title: "Calculator", path: "/vanilla/calculator.html" },
// ];

// export default function VanillaMenu() {
//   return (
//     <div>
//       <h2>Vanilla JavaScript Tasks</h2>
//       <ul>
//         {vanillaTasks.map((task, i) => (
//           <li key={i}>
//             <a href={task.path} target="_blank" rel="noopener noreferrer">
//               {task.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function VanillaMenu() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/data/vanilla-tasks.json")
      .then((res) => res.json())
      .then((data) => setSections(data))
      .catch((error) => console.error("Error loading vanilla tasks:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vanilla JavaScript Examples</h2>
      {sections.map((section, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <h3>{section.section}</h3>
          <ul>
            {section.tasks.map((task, i) => (
              <li key={i}>
                <a href={task.path} target="_blank" rel="noopener noreferrer">
                  {task.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
