//? ----------------------------------
// import React, { useState, useEffect } from "react";
// import css from "./CounterSolution.module.css";

// const CounterSolution = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("componentDidMount (аналог)"); // Викликається один раз після рендеру
//     return () => {
//       console.log("componentWillUnmount (аналог)"); // Викликається перед видаленням компонента
//     };
//   }, []);

//   useEffect(() => {
//     console.log("componentDidUpdate (аналог)"); // Викликається після кожного оновлення `count`
//   }, [count]);

//   console.log("render"); // Викликається при кожному рендері

//   return (
//     <div className={css.counter}>
//       <p className={css.counter__value}>{count}</p>
//       <div className={css.counter__controls}>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </div>
//   );
// };

// export default CounterSolution;
// ?-------------------------------------------

import React, { useState } from "react";
import css from "./CounterSolution.module.css";


const CounterSolution = ({ initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className={css.counter}>
      <span className={css.counter__value}>{value}</span>

      <div className={css.counter__controls}>
        <button type="button" onClick={handleDecrement}>
          Decrease by 1
        </button>
        <button type="button" onClick={handleIncrement}>
          Increase by 1
        </button>
      </div>
    </div>
  );
};

export default CounterSolution;
