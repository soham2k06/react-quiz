import { useEffect } from "react";
import Main from "./Main";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartingScreen from "./StartingScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";
import { questions } from "../data/questions";

export default function App() {
  const { status, dispatch } = useQuiz();

  useEffect(
    function () {
      dispatch({ type: "dataReceived", payload: questions });
    },
    [dispatch]
  );

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartingScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
