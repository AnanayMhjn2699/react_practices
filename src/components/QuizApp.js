import { useState } from "react";
import "../styles/QuizApp.css";

const data = [
  {
    question: "what is the color of sky?",
    correctAnswer: "blue",
    answers: ["blue", "red", "green", "yellow"],
  },
  {
    question: "what is the color of trees?",
    correctAnswer: "green",
    answers: ["blue", "green", "yellow", "red"],
  },
];

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    if (document.getElementById(`${data[index].correctAnswer}`).checked) {
      setScore(score + 1);
    }

    if (index !== data.length - 1) setIndex(index + 1);
    else setSubmitted(true);
  };
  return (
    <div>
      {!submitted && (
        <>
          <h2>{data[index].question}</h2>
          {data[index].answers.map((ans) => {
            return (
              <>
                <label>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="Answer"
                    id={`${ans}`}
                  ></input>
                  {ans}
                </label>
                <br />
              </>
            );
          })}
          <button className="button" onClick={handleClick}>
            Next
          </button>
        </>
      )}

      {submitted && (
        <h2>
          Your Score is {score}/{data.length}
        </h2>
      )}
    </div>
  );
};
export default QuizApp;
