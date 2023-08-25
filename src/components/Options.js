import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const hasAnswered = answer !== null;
  const curQuestion = questions[index];
  return (
    <div className="options">
      {curQuestion.options.map((opt, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === curQuestion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={opt}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
