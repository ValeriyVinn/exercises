export async function loadMenu(section = "javascript") {
  try {
    const res = await fetch(`http://localhost:5000/api/menu/${section}`);
    const data = await res.json();
    renderMenu(data);
  } catch (error) {
    console.error("Menu fetch error:", error);
  }
}

function renderMenu(menuData) {
  const container = document.getElementById("menu-container");
  if (!container || !Array.isArray(menuData)) {
    console.error("Invalid menu data:", menuData);
    return;
  }

  const menuHTML = `<nav class="menu">
    <ol class="menu-list">
      ${menuData
        .map(
          (group) => `
        <li class="menu-group">
          <span class="menu-title">${group.title}</span>
          ${
            group.children && group.children.length > 0
              ? `
            <ul class="submenu">
              ${group.children
                .map(
                  (child) => `
                <li class="submenu-item">
                  ${
                    child.path
                      ? `<a href="${child.path}" class="submenu-link">${child.title}</a>`
                      : `<span class="submenu-title">${child.title}</span>`
                  }
                  ${
                    child.tasks && child.tasks.length > 0
                      ? `
                    <ul class="task-list">
                      ${child.tasks
                        .map(
                          (task) => `
                        <li class="task-item">
                          <a href="${task.path || "#"}" class="task-link">${
                            task.title
                          }</a>
                        </li>
                      `
                        )
                        .join("")}
                    </ul>
                  `
                      : ""
                  }
                </li>
              `
                )
                .join("")}
            </ul>
          `
              : ""
          }
        </li>
      `
        )
        .join("")}
    </ol>
  </nav>`;

  container.innerHTML = menuHTML;
}
