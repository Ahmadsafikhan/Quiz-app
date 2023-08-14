import { useReducer } from "react";
import jsonData from "./Questions.json";
import Header from "./components/Header";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import TimeLine from "./components/TimeLine";
import FinishScreen from "./components/FinishScreen";
import NextButton from "./components/NextButton";
import Timer from "./components/Timer";

const SEC_PER_QUESTION = 32;
const initialState = {
  questions: jsonData.questions,
  status: "ready",
  questionIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...currState, status: "ready", questions: action.payload };

    case "dataFailed":
      return { ...currState, status: "error" };

    case "start":
      return {
        ...currState,
        status: "active",
        secondsRemaining: currState.questions.length * SEC_PER_QUESTION,
      };

    case "newAnswer":
      const question = currState.questions.at(currState.questionIndex);
      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + Number(question.points)
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, questionIndex: currState.questionIndex + 1, answer: null };

    case "finish":
      const newScore = currState.points > currState.highscore ? currState.points : currState.highscore;
      return { ...currState, status: "finished", highscore: newScore, answer: null };

    case "restart":
      return {
        ...initialState,
        status: "active",
        questions: currState.questions,
        secondsRemaining: currState.questions.length * SEC_PER_QUESTION,
      };

    case "tick":
      const checkedStatus = currState.secondsRemaining <= 0 ? "finished" : currState.status;
      return { ...currState, status: checkedStatus, secondsRemaining: currState.secondsRemaining - 1 };

      case 'quit':
      return { ...initialState, status: 'ready' };

    default:
      throw new Error("Unknown action type");
  }
}


function App() {
  const [
    { questions, status, questionIndex, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, currVal) => prev + currVal.points, 0);

  return (
    <div className="bg-gradient-to-br from-green-400 to-white p-4 min-h-screen flex justify-center items-center">
      <div className="w-[500px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center h-auto">
        <Header />
        <main className="py-4">
          {status === "loading" && <Loader />}
          {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
          {status === "active" && (
            <>
              <TimeLine questionIndex={questionIndex} numQuestions={numQuestions} answer={answer} />
              <Question question={questions[questionIndex]} dispatch={dispatch} answer={answer} />
              <footer className="flex justify-between items-center mt-4">
                <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
                <NextButton
                  answer={answer}
                  dispatch={dispatch}
                  questionIndex={questionIndex}
                  numQuestions={numQuestions}
                />
                <button
                    onClick={() => dispatch({ type: 'quit' })}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md ml-2"
                  >
                    Quit
                  </button>
              </footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen dispatch={dispatch} highscore={highscore} points={points} maxPoints={maxPoints} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

