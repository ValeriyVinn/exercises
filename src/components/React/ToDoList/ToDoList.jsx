import { useState, useEffect } from "react";
import css from "./ToDoList.module.css";
function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Помилка парсингу todos з localStorage", e);
      return [];
    }
  });

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTask.trim() === "") return;
    const newTodo = { id: Date.now(), text: newTask.trim() };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div className={css.addTask}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Нове завдання"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className={css.toDoList}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: "0.5rem" }}>
            {editingId === todo.id ? (
              <div className={css.editTask}>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <div>
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className={css.currentTask}>
                {todo.text}
                <div>
                  <button onClick={() => startEditing(todo.id, todo.text)}>
                    Edit
                  </button>
                  <button className={css.secondButton} onClick={() => deleteTodo(todo.id)}>Remove</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
