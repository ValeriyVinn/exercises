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
    <h1 className={css.typingHeader}>
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
