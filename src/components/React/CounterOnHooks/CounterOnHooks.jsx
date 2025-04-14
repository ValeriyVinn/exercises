// import React from "react";
// import css from "./CounterOnHooks.module.css";
// import CounterSolution from "./CounterSolution"

// class CounterOnHooks extends React.Component {
//   state = {
//     value: this.props.initialValue,
//     codeInput: "",
//     solutions: [],
//     isAccordionOpen: false,
//   };

//   handleCodeChange = (event) => {
//     this.setState({ codeInput: event.target.value });
//   };

//   handlePostCode = async () => {
//     const exerciseObject = {
//       name: "Counter On Hooks",
//       statement: "Create a counter with increment and decrement functionality.",
//       solution: [this.state.codeInput], // Використовуємо актуальний state
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/exercises", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(exerciseObject), // Надсилаємо об'єкт із актуальним значенням
//       });

//       if (response.ok) {
//         console.log("Exercise successfully posted or updated.");
//       } else {
//         console.error("Failed to post or update the exercise.");
//       }
//     } catch (error) {
//       console.error("Error posting the exercise:", error.message);
//     }
//   };

//   toggleAccordion = async () => {
//     this.setState((prevState) => ({
//       isAccordionOpen: !prevState.isAccordionOpen,
//     }));

//     if (!this.state.isAccordionOpen) {
//       try {
//         const response = await fetch("http://localhost:5000/api/exercises");
//         if (response.ok) {
//           const data = await response.json();
//           const currentExercise = data.find(
//             (ex) => ex.name === "Counter On Hooks"
//           );
//           if (currentExercise) {
//             const exerciseDetails = await fetch(
//               `http://localhost:5000/api/exercises/${currentExercise._id}`
//             );
//             const details = await exerciseDetails.json();
//             this.setState({ solutions: details.solution });
//           }
//         } else {
//           console.error("Failed to fetch exercises.");
//         }
//       } catch (error) {
//         console.error("Error fetching solutions:", error.message);
//       }
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter On Hooks</h1>
//         <p>
//           Create a counter on hooks with increment and decrement functionality.
//         </p>

//         <CounterSolution />

//         <textarea
//           rows="5"
//           cols="50"
//           className={css.code_input}
//           placeholder="Write your code here"
//           value={this.state.codeInput}
//           onChange={this.handleCodeChange}
//         />
//         <button onClick={this.handlePostCode}>Post Code</button>

//         <div>
//           <button onClick={this.toggleAccordion}>
//             {this.state.isAccordionOpen ? "Hide Solutions" : "Show Solutions"}
//           </button>
//           {this.state.isAccordionOpen && (
//             <div className={css.accordion}>
//               <h3>Solutions:</h3>
//               <ul className={css.solutionList}>
//                 {this.state.solutions.map((solution, index) => (
//                   <li key={index} className={css.solutionItem}>
//                     <pre>{solution}</pre>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default CounterOnHooks;

// import React, { useState } from "react";
// import css from "./CounterOnHooks.module.css";
// import CounterSolution from "./CounterSolution";

// const CounterOnHooks = ({ initialValue }) => {
//   const [value, setValue] = useState(initialValue);
//   const [codeInput, setCodeInput] = useState("");
//   const [solutions, setSolutions] = useState([]);
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

//   const handleCodeChange = (event) => {
//     setCodeInput(event.target.value);
//   };

//   const handlePostCode = async () => {
//     const exerciseObject = {
//       name: "Counter On Hooks",
//       statement: "Create a counter with increment and decrement functionality.",
//       solution: [codeInput],
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/exercises", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(exerciseObject),
//       });

//       if (response.ok) {
//         console.log("Exercise successfully posted or updated.");
//       } else {
//         console.error("Failed to post or update the exercise.");
//       }
//     } catch (error) {
//       console.error("Error posting the exercise:", error.message);
//     }
//   };

//   const toggleAccordion = async () => {
//     const willBeOpen = !isAccordionOpen;
//     setIsAccordionOpen(willBeOpen);

//     if (willBeOpen) {
//       try {
//         const response = await fetch("http://localhost:5000/api/exercises");
//         if (response.ok) {
//           const data = await response.json();
//           const currentExercise = data.find(
//             (ex) => ex.name === "Counter On Hooks"
//           );
//           if (currentExercise) {
//             setSolutions(currentExercise.solution);
//           }
//         } else {
//           console.error("Failed to fetch exercises.");
//         }
//       } catch (error) {
//         console.error("Error fetching solutions:", error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Counter On Hooks</h1>
//       <p>
//         Create a counter on hooks with increment and decrement functionality.
//       </p>

//       <CounterSolution />

//       <textarea
//         rows="5"
//         cols="50"
//         className={css.code_input}
//         placeholder="Write your code here"
//         value={codeInput}
//         onChange={handleCodeChange}
//       />
//       <button onClick={handlePostCode}>Post Code</button>

//       <div>
//         <button onClick={toggleAccordion}>
//           {isAccordionOpen ? "Hide Solutions" : "Show Solutions"}
//         </button>
//         {isAccordionOpen && (
//           <div className={css.accordion}>
//             <h3>Solutions:</h3>
//             <ul className={css.solutionList}>
//               {solutions.map((solution, index) => (
//                 <li key={index} className={css.solutionItem}>
//                   <pre>{solution}</pre>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CounterOnHooks;

import React, { useState } from "react";
import css from "./CounterOnHooks.module.css";
import CounterSolution from "./CounterSolution";

const API_URL = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL);

const CounterOnHooks = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
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
      name: "Counter On Hooks",
      statement: "Create a counter with increment and decrement functionality.",
      solution: [codeInput],
    };

    try {
      const response = await fetch(`${API_URL}/exercises`, {
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
        const response = await fetch(`${API_URL}/exercises`);
        if (response.ok) {
          const data = await response.json();
          const currentExercise = data.find(
            (ex) => ex.name === "Counter On Hooks"
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
      <h1>Counter On Hooks</h1>
      <p>
        Create a counter on hooks with increment and decrement functionality.
      </p>

      <CounterSolution />

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

export default CounterOnHooks;
