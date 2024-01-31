import { useEffect, useState } from "react";

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const moleAppearInGridElem = Math.floor(Math.random() * 9 + 1);

  useEffect(() => {
    document.getElementById("ID" + moleAppearInGridElem).classList.add("mole");

    const intervalID = setTimeout(() => {
      document
        .getElementById("ID" + moleAppearInGridElem)
        .classList.remove("mole");
      setCount(count + 1);
    }, 700);

    return () => {
      clearInterval(intervalID);
    };
  }, [count]);

  // /*tried creating handle click but the thing is it is not working properly because
  //   the components are not getting mounted before this function for which tried using useEffect but
  //   not working as useEffect cannot be inside the function and function cannot be written
  //   inside useEffect thus had to give inline event handler */
  //   const handleClick = ({ id }) => {
  //     if (document.getElementById(id).classList.contains("mole"))
  //       setScore(score + 1);
  //   };

  return (
    <>
      <h1>Score is {score}</h1>
      <div className="mainGrid">
        <div
          id="ID1"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID1").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID2"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID2").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID3"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID3").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
      </div>
      <div className="mainGrid">
        <div
          id="ID4"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID4").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID5"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID5").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID6"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID6").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
      </div>
      <div className="mainGrid">
        <div
          id="ID7"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID7").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID8"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID8").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
        <div
          id="ID9"
          className="gridElem"
          onClick={() => {
            if (document.getElementById("ID9").classList.contains("mole")) {
              setScore(score + 1);
              document
                .getElementById("ID" + moleAppearInGridElem)
                .classList.remove("mole");
            }
          }}
        ></div>
      </div>
    </>
  );
};
export default WhackAMole;
