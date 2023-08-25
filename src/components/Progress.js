import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, index, answer, points, maxPoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        Points {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
