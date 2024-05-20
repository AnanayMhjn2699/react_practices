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

/* *************************************another way to do the same but easy
import { useState } from "react";
import { EMPTY_IMAGE, MOLE_IMAGE } from "../utils/WhackAMoleImages";
import { useEffect } from "react";
const PracticeComponent = () => {
  const [moleIndex, setMoleIndex] = useState(0);
  let intervalId = 0;
  const [score, setScore] = useState(0);

  useEffect(() => {
    intervalId = setInterval(() => {
      setMoleIndex(Math.floor(Math.random() * 9));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [moleIndex]);
  return (
    <>
      <h1>{score}</h1>
      <div id="mainDiv" style={{ width: 600 + "px" }}>
        {Array(9)
          .fill("")
          .map((i, index) => {
            return (
              <div
                onClick={(e) => {
                  if (parseInt(e.target.id) === moleIndex) setScore(score + 1);
                }}
                key={index}
                id={index}
                style={{
                  display: "inline-block",
                  width: 200 + "px",
                  height: 200 + "px",
                  backgroundImage:
                    moleIndex === index
                      ? `url(${MOLE_IMAGE})`
                      : `url(${EMPTY_IMAGE})`,
                }}
              ></div>
            );
          })}
      </div>
    </>
  );
};
export default PracticeComponent;







*/
