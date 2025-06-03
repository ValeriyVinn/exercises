// export async function loadMenu(section = "html-css") {
//   try {
//     const res = await fetch(`http://localhost:5000/api/menu/${section}`);
//     const data = await res.json();
//     //   console.log("Menu data from server:", data);
//     renderMenu(data);
//   } catch (error) {
//     console.error("Menu fetch error:", error);
//   }
// }

// function renderMenu(menuData) {
//   const container = document.getElementById("menu-container");
//   if (!container || !Array.isArray(menuData)) {
//     console.error("Invalid menu data:", menuData);
//     return;
//   }

//   const menuHTML = `<nav  class="menu">
//     <ol class="menu-item">
//       ${menuData
//         .map(
//           (group) => `
//         <li class="topic-title">
//           <strong>${group.title}</strong>
//           ${
//             group.children && group.children.length > 0
//               ? `
//             <ul>
//               ${group.children
//                 .map(
//                   (child) => `
//                 <li>
//                   ${
//                     child.path
//                       ? `<a href="${child.path}">${child.title}</a>`
//                       : `<strong>${child.title}</strong>`
//                   }
//                   ${
//                     child.tasks && child.tasks.length > 0
//                       ? `
//                     <ul>
//                       ${child.tasks
//                         .map(
//                           (task) => `
//                         <li><a href="${task.path || "#"}">${task.title}</a></li>
//                       `
//                         )
//                         .join("")}
//                     </ul>
//                   `
//                       : ""
//                   }
//                 </li>
//               `
//                 )
//                 .join("")}
//             </ul>
//           `
//               : ""
//           }
//         </li>
//       `
//         )
//         .join("")}
//     </ol>
//   </nav>`;

//   container.innerHTML = menuHTML;
// }

