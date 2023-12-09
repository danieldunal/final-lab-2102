import { useState } from "react";
import { resultInitialState } from "../../constvars";
import "./quiz.scss";

const Quiz = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false)

    const {question, choices, correctAnswer} = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if(answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = () => {
        setAnswerIdx(null);
        setResult((prev) => answer
            ? {
                ...prev,
                correctAnswers: prev.correctAnswers + 1
            } : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }
        );

        if(currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
    }

    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    }

    return (
        <div className="quiz-container">
            {!showResult ? (
            <>
                <span className="current-question-num">{currentQuestion + 1}</span>
                <span className="num-questions">/{questions.length}</span>
                <div className="current-score">Current Score: {result.correctAnswers}/10</div>
                <h2>{question}</h2>
                <ul>
                    {
                        choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerClick(answer, index)}
                                key = {answer}
                                className={answerIdx === index ? 'selected-ans' : null}>
                                    {answer}
                            </li>
                        ))
                    }
                </ul>
                <div className="footer">
                    <button onClick={onClickNext} disabled={answerIdx === null}>
                        {currentQuestion === questions.length -1 ? "Finish" : "Next"}
                    </button>
                </div>
            </>) : <div className="result">
                <h3 className="resultText">Result</h3>
                <p>
                    # Quesitons: <span>{questions.length}</span>
                </p>
                <p>
                    # Correct: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    # Wrong: <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTryAgain}>Try again</button>
            </div>}
        </div>
    );
};

export default Quiz;