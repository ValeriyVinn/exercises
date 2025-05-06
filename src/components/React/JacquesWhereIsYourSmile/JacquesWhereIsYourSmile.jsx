import Jacques from "./components/Jacques";
import { useState } from "react";
import css from "./JacquesWhereIsYourSmile.module.css";

const API_URL = import.meta.env.VITE_API_URL;

const JacquesWhereIsYourSmile = () => {
  const [codeInput, setCodeInput] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleCodeChange = (event) => {
    setCodeInput(event.target.value);
  };

  const handlePostCode = async () => {
    if (import.meta.env.MODE === "production") {
      console.error("Writing data is not allowed in production.");
      return;
    }

    const exerciseObject = {
      name: "Jacques Where Is Your Smile",
      statement: "Create a profile of Jacques.",
      solution: [codeInput],
    };

    try {
      const response = await fetch(`${API_URL}/react`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseObject),
      });

      if (response.ok) {
        console.log("Exercise successfully posted or updated.");
      } else {
        console.error("Failed to post or update the exercise.");
      }
    } catch (error) {
      console.error("Error posting the exercise:", error.message);
    }
  };

  const toggleAccordion = async () => {
    const willBeOpen = !isAccordionOpen;
    setIsAccordionOpen(willBeOpen);

    if (willBeOpen) {
      try {
        const response = await fetch(`${API_URL}/react`);
        if (response.ok) {
          const data = await response.json();
          const currentExercise = data.find(
            (ex) => ex.name === "Jacques Where Is Your Smile"
          );
          if (currentExercise) {
            setSolutions(currentExercise.solution);
          }
        } else {
          console.error("Failed to fetch exercises.");
        }
      } catch (error) {
        console.error("Error fetching solutions:", error.message);
      }
    }
  };

  return (
    <div>
      <p>Create a profile of Jacques whereIsYourSmile.</p>

      <Jacques />

      <textarea
        rows="5"
        cols="50"
        className={css.code_input}
        placeholder="Write your code here"
        value={codeInput}
        onChange={handleCodeChange}
      />
      <button onClick={handlePostCode}>Post Code</button>

      <div>
        <button onClick={toggleAccordion}>
          {isAccordionOpen ? "Hide Solutions" : "Show Solutions"}
        </button>
        {isAccordionOpen && (
          <div className={css.accordion}>
            <h3>Solutions:</h3>
            <ul className={css.solutionList}>
              {solutions.map((solution, index) => (
                <li key={index} className={css.solutionItem}>
                  <pre>{solution}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JacquesWhereIsYourSmile;
