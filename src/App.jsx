import Quiz from "./components/quiz/Quiz";
import { theQuiz } from "./constvars";

function App() {
  return (
  <><title>ARE YOU INTELLIGENT QUIZ</title>
  <Quiz questions={theQuiz.questions} /></>
  )
}

export default App;