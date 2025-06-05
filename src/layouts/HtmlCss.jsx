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

