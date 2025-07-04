import vanillaMenu from "./menu-data/vanilla.json";

export default function VanillaMenu() {
  const renderLink = (title, path) => (
    <a
      href={path ? `${import.meta.env.BASE_URL}${path}` : "#"}
      // target={path ? "_blank" : "_self"}
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
      {/* <h2>JavaScript Examples</h2> */}
      {/* <ol>
        {vanillaMenu.map((section, idx) => (
          <li key={idx}>
            {renderLink(section.title, section.path)}
            {section.children && renderChildren(section.children)}
          </li>
        ))}
      </ol> */}
      <a href="vanilla/java-script/java-script.html">Java-Script Home</a>
    </div>
  );
}

