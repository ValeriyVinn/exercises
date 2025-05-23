import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-js",
  exerciseName: "Delayed promise",
  statement:
    "Write a function delay(ms) that returns a promise that will be fulfilled after a given time.",
});

// ! Рішення ----------
// const isSuccess = false;
// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("1 second passed");
//       } else {
//         reject("Sorry, it's Error");
//       }
//     }, ms)
//   });
// }

// delay(3000)
//   .then(value => console.log(value))
//   .catch(error => console.error(error));


// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = false;

//     if (isSuccess) {
//       onSuccess("Everything went well.");
//     } else {
//       onError("Nothing to say.");
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);


const fetchUserFromServer = (username) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("Everything went well, Chunga.");
      } else {
        reject("Nothing to say about Chunga.");
      }
    }, 2000);
  });
};

fetchUserFromServer("Chunga-changa")
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
