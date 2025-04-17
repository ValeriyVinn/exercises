// const firstName = "Valeriy";
// const age = 55;
// const isStudent = false;

// console.log(`My name is ${firstName}, ${age} years old, my student status is "${isStudent}"`);

// const API_URL = "http://localhost:5000/api/vanilla";

// const EXERCISE_NAME = "Task 1: Personal Info Card";

// const textarea = document.getElementById("solution-input");
// const sendBtn = document.getElementById("send-btn");
// const getBtn = document.getElementById("get-btn");
// const solutionsList = document.getElementById("solutions-list");

// sendBtn.addEventListener("click", async () => {
//   const solution = textarea.value.trim();
//   if (!solution) return;

//   const exerciseObject = {
//     name: EXERCISE_NAME,
//     statement:
//       "Create variables to store your name, age, and whether you’re a student (true/false). Print a message to the console using these values.",
//     solution: [solution],
//   };

//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(exerciseObject),
//     });

//     const result = await response.json();
//     alert(result.message);
//   } catch (err) {
//     console.error("Error posting solution:", err);
//   }
// });

// getBtn.addEventListener("click", async () => {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     const current = data.find((item) => item.name === EXERCISE_NAME);

//     solutionsList.innerHTML = "";
//     if (current?.solution?.length) {
//       current.solution.forEach((sol) => {
//         const li = document.createElement("li");
//         const pre = document.createElement("pre");
//         pre.textContent = sol;
//         li.appendChild(pre);
//         solutionsList.appendChild(li);
//       });
//     } else {
//       solutionsList.innerHTML = "<li>No solutions yet.</li>";
//     }
//   } catch (err) {
//     console.error("Error fetching solutions:", err);
//   }
// });


const LOCAL_API_URL = "http://localhost:5000/api/vanilla";
const REMOTE_API_URL = "https://your-backend.onrender.com/api/vanilla"; // Заміни на твій actual Render URL
const EXERCISE_NAME = "Task 1: Personal Info Card";

const textarea = document.getElementById("solution-input");
const sendBtn = document.getElementById("send-btn");
const getBtn = document.getElementById("get-btn");
const solutionsList = document.getElementById("solutions-list");

// Визначаємо чи ми локально
const isLocalhost = location.hostname === "localhost";
const API_URL = isLocalhost ? LOCAL_API_URL : REMOTE_API_URL;

sendBtn.addEventListener("click", async () => {
  const solution = textarea.value.trim();
  if (!solution) return;

  const exerciseObject = {
    name: EXERCISE_NAME,
    statement:
      "Create variables to store your name, age, and whether you’re a student (true/false). Print a message to the console using these values.",
    solution: [solution],
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exerciseObject),
    });

    const result = await response.json();
    alert(result.message);
  } catch (err) {
    console.error("Error posting solution:", err);
  }
});

getBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const current = data.find((item) => item.name === EXERCISE_NAME);

    solutionsList.innerHTML = "";
    if (current?.solution?.length) {
      current.solution.forEach((sol) => {
        const li = document.createElement("li");
        const pre = document.createElement("pre");
        pre.textContent = sol;
        li.appendChild(pre);
        solutionsList.appendChild(li);
      });
    } else {
      solutionsList.innerHTML = "<li>No solutions yet.</li>";
    }
  } catch (err) {
    console.error("Error fetching solutions:", err);
  }
});
