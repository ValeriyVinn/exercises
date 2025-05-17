import Jacques from "./components/Jacques";
import { useState, useEffect } from "react";
import css from "./JacquesWhereIsYourSmile.module.css";

const JacquesWhereIsYourSmile = () => {
  // Відновлення стану з localStorage або встановлення за замовчуванням (false)
  const [isSandboxOpen, setIsSandboxOpen] = useState(
    () => JSON.parse(localStorage.getItem("isSandboxOpen")) || false
  );

  // Перемикач стану Sandbox з записом у localStorage
  const toggleSandbox = () => {
    setIsSandboxOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("isSandboxOpen", JSON.stringify(newState));
      return newState;
    });
  };

  // Оновлення стану при завантаженні компонента
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("isSandboxOpen"));
    if (savedState !== null) {
      setIsSandboxOpen(savedState);
    }
  }, []);

  return (
    <div className={css.flex}>
      <div>
        <p>Create a profile of Jacques whereIsYourSmile.</p>
        <Jacques />
      </div>

      <div className={css.solution}>
        {/* Одна кнопка для відкриття/закриття Sandbox */}
        <button onClick={toggleSandbox}>
          {isSandboxOpen ? "Hide Sandbox" : "Show Sandbox"}
        </button>

        {/* Пісочниця з'являється при натисканні на кнопку */}
        {isSandboxOpen && (
          <div className={css.accordion}>
            <iframe
              src="https://codesandbox.io/embed/3klsqw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js"
              style={{
                width: "100%",
                height: "500px",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
              title="Jacques whereIsYourSmile"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default JacquesWhereIsYourSmile;
