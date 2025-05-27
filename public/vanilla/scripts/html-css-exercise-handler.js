export function setupExercise({ fileKey, exerciseName, statement }) {
  const LOCAL_API_URL = "http://localhost:5000/api/html-css";
  const REMOTE_API_URL = "https://exercises-backend.onrender.com/api/html-css";
  const isLocalhost =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const API_URL = `${isLocalhost ? LOCAL_API_URL : REMOTE_API_URL}/${fileKey}`;

  const textarea = document.getElementById("solution-input");
  const sendBtn = document.getElementById("send-btn");
  const getBtn = document.getElementById("get-btn");
  const solutionsList = document.getElementById("solutions-list");

  sendBtn.addEventListener("click", async () => {
    if (!isLocalhost) {
      alert("Solution submission is only allowed locally.");
      return;
    }

    const solution = textarea.value.trim();
    if (!solution) return;

    const exerciseObject = {
      name: exerciseName,
      statement,
      solution: [solution],
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exerciseObject),
      });

      const result = await response.json();
      alert(result.message || "Saved successfully!");
    } catch (err) {
      console.error("Error posting solution:", err);
      alert("Something went wrong while saving the solution.");
    }
  });

  getBtn.addEventListener("click", async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const current = data.find((item) => item.name === exerciseName);

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
      solutionsList.innerHTML = "<li>Failed to load solutions.</li>";
    }
  });
}
