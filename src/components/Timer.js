import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsLeft } = useQuiz();
  const mins = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
