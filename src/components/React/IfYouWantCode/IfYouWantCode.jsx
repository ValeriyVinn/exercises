// import { useEffect, useState } from "react";
// import css from "./IfYouWantCode.module.css";

// export default function TypingMessage({ message = "If you want code" }) {
//   const [typedText, setTypedText] = useState("");
//   const [showDollar, setShowDollar] = useState(false);
//   const [showAnswer, setShowAnswer] = useState(false);

//   useEffect(() => {
//     let index = 0;
//     const typingSpeed = 150;

//     const interval = setInterval(() => {
//       setTypedText((prev) => prev + message[index]);
//       index += 1;

//       if (index >= message.length) {
//         clearInterval(interval);

//         // Після завершення друкування — показати $$$ та відповідь
//         setTimeout(() => {
//           setShowDollar(true);
//         }, 1300);

//         setTimeout(() => {
//           setShowAnswer(true);
//         }, 2300);
//       }
//     }, typingSpeed);

//     // cleanup (на випадок unmount)
//     return () => clearInterval(interval);
//   }, [message]);

//   return (
//     <h1 className={css.typingHeader}>
//       <span className={css.message}>{typedText}</span>
//       <span className={css.dollar}>{showDollar && "$$$"}</span>
//       <span className={css.answer}>{showAnswer && "you've got it"}</span>
//     </h1>
//   );
// }

// import { useEffect, useState } from "react";
// import css from "./IfYouWantCode.module.css";

// export default function TypingMessage({ message = "Iff you want code" }) {
//   const [typedText, setTypedText] = useState("");
//   const [showDollar, setShowDollar] = useState(false);
//   const [showAnswer, setShowAnswer] = useState(false);

//   useEffect(() => {
//     let index = 0;
//     const typingSpeed = 150;

//     const interval = setInterval(() => {
//       // Додаткова перевірка на межі
//       if (index < message.length) {
//         setTypedText((prev) => prev + message.charAt(index));
//         index += 1;
//       } else {
//         clearInterval(interval);

//         // Показуємо додаткові частини після затримки
//         setTimeout(() => {
//           setShowDollar(true);
//         }, 5300);

//         setTimeout(() => {
//           setShowAnswer(true);
//         }, 7300);
//       }
//     }, typingSpeed);

//     return () => clearInterval(interval);
//   }, [message]);

//   return (
//     <h1 className="typing-header">
//       <span className={css.message}>{typedText}</span>
//       <span className={css.dollar}>{showDollar && "$$$"}</span>
//       <span className={css.answer}>{showAnswer && "you've got it"}</span>
//     </h1>
//   );
// }
import { useEffect, useState } from "react";
import css from "./IfYouWantCode.module.css";
export default function TypingMessage({ message = "If you want code" }) {
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showDollar, setShowDollar] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;

    if (charIndex < message.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + message.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Після завершення друкування
      const dollarTimer = setTimeout(() => {
        setShowDollar(true);
      }, 5300);

      const answerTimer = setTimeout(() => {
        setShowAnswer(true);
      }, 7300);

      return () => {
        clearTimeout(dollarTimer);
        clearTimeout(answerTimer);
      };
    }
  }, [charIndex, message]);

  return (
    <h1 className="typing-header">
      <span className={css.message}>{typedText}</span>
      <span className={`${css.dollar} ${css.scaleInCenter}`}>
        {showDollar && "$$$"}
      </span>
      <span className={`${css.answer} ${css.bounceInTop}`}>
        {showAnswer && "you've got it"}
      </span>
    </h1>
  );
}
