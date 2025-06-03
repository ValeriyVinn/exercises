import menu from "./vanilla-menu.json" assert { type: "json" };

const container = document.getElementById("menu");

function createLink(title, path) {
  const link = document.createElement("a");
  link.textContent = title;
  link.href = path || "#";
  if (!path) link.style.opacity = "0.5";
  return link;
}

function renderMenu(data) {
  const ol = document.createElement("ol");

  data.forEach((topic) => {
    const li = document.createElement("li");
    const topicTitle = document.createElement("div");
    topicTitle.textContent = topic.title;
    topicTitle.classList.add("topic-title");
    li.appendChild(topicTitle);

    if (topic.children && topic.children.length > 0) {
      const ul = document.createElement("ul");

      topic.children.forEach((sub) => {
        const subLi = document.createElement("li");
        const subTitle = document.createElement("div");
        subTitle.classList.add("subtopic-title");

        if (sub.path) {
          const link = createLink(sub.title, sub.path);
          subTitle.appendChild(link);
        } else {
          subTitle.textContent = sub.title;
        }

        subLi.appendChild(subTitle);

        if (sub.tasks && sub.tasks.length > 0) {
          const taskList = document.createElement("ul");
          sub.tasks.forEach((task) => {
            const taskLi = document.createElement("li");
            const link = createLink(task.title, task.path);
            taskLi.appendChild(link);
            taskList.appendChild(taskLi);
          });
          subLi.appendChild(taskList);
        }

        ul.appendChild(subLi);
      });

      li.appendChild(ul);
    }

    ol.appendChild(li);
  });

  return ol;
}

container.appendChild(renderMenu(menu));
