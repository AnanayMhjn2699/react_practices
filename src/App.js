//*************************************************creat a dot on clicking on screen with undo redo buttons
// import { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [points, setPoints] = useState([]);
//   const [undoPoints, setUndoPoints] = useState([]);
//   const handleClick = (e) => {
//     console.log(e);
//     const { clientX, clientY } = e;
//     setPoints([...points, { x: clientX, y: clientY }]);
//   };

//   const handleUndo = () => {
//     const newPoints = [...points];
//     const popped = newPoints.pop();
//     setUndoPoints([...undoPoints, popped]);
//     setPoints(newPoints);
//   };
//   const handleRedo = () => {
//     const popped = undoPoints.pop();
//     if (!popped) return;
//     setPoints([...points, popped]);
//   };

//   return (
//     <>
//       <button className="undo" onClick={handleUndo}>
//         undo
//       </button>
//       <button className="redo" onClick={handleRedo}>
//         redo
//       </button>
//       <div className="divArea" onClick={handleClick}>
//         {points.map((point) => {
//           return (
//             <div
//               className="point"
//               style={{ left: point.x + "px", top: point.y + "px" }}
//             ></div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;

//*****************************************************************************Image carousel
// import { useState } from "react";
// import "./App.css";

// const images = [
//   "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
//   "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*",
//   "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg",
// ];

// const Buttons = ({ setImg }) => {
//   const [intervalId, setIntervalId] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() =>
//           setImg((img) => {
//             return (img - 1 + 3) % 3;
//           })
//         }
//       >
//         Previous
//       </button>
//       <button
//         onClick={() =>
//           setImg((img) => {
//             return (img + 1) % 3;
//           })
//         }
//       >
//         Next
//       </button>
//       <button
//         onClick={() => {
//           if (!intervalId) {
//             const newIntervalId = setInterval(() => {
//               setImg((img) => {
//                 return (img + 1) % 3;
//               });
//             }, 500);
//             setIntervalId(newIntervalId);
//           }
//         }}
//       >
//         Play
//       </button>
//       <button
//         onClick={() => {
//           clearInterval(intervalId);
//           setIntervalId(0);
//         }}
//       >
//         Stop
//       </button>
//     </>
//   );
// };

// const App = () => {
//   const [img, setImg] = useState(0);

//   return (
//     <div className="">
//       <img src={images[img]} alt="nature" className="block" />
//       <Buttons setImg={setImg} />
//     </div>
//   );
// };

// export default App;

// //***************************************************************************pin matching */
// import { useState } from "react";
// import "./App.css";

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const pin = "1234";

// const App = () => {
//   const [num, setNum] = useState([]);
//   const [isCorrect, SetIsCorrect] = useState(null);
//   return (
//     <>
//       <input placeholder="enter the pin" value={num}></input>
//       <button
//         onClick={() => {
//           num.join("") === pin ? SetIsCorrect(true) : SetIsCorrect(false);
//         }}
//       >
//         {" "}
//         Submit
//       </button>
//       {isCorrect ? (
//         <p>You have entered Correct Pin</p>
//       ) : (
//         <p>Enter the correct pin</p>
//       )}
//       <div>
//         {numbers.map((no) => {
//           return (
//             <button
//               key={no}
//               onClick={() => {
//                 setNum((prev) => {
//                   return [...prev, no];
//                 });
//               }}
//               className="btn"
//             >
//               {no}
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;

// /******************************************************multi select state dropdown */
// import "./App.css";
// import StateDropDown from "./components/StateDropDown";

// const App = () => {
//   return <StateDropDown />;
// };
// export default App;

// /***********************************building a traffic light which changes it's color at set intervals */
// import { useEffect, useState } from "react";
// import "./App.css";
// const lights = ["red", "yellow", "green"];
// const App = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index === 0)
//       setTimeout(() => {
//         setIndex(1);
//       }, 3000);
//     else if (index === 1)
//       setTimeout(() => {
//         setIndex(2);
//       }, 2000);
//     else
//       setTimeout(() => {
//         setIndex(0);
//       }, 5000);
//   }, [index]);

//   return (
//     <div className="mainDiv">
//       <div
//         className={"circle red" + (lights[index] === "red" ? " on" : "")}
//       ></div>
//       <div
//         className={"circle yellow" + (lights[index] === "yellow" ? " on" : "")}
//       ></div>
//       <div
//         className={"circle green" + (lights[index] === "green" ? " on" : "")}
//       ></div>
//     </div>
//   );
// };
// export default App;

// /*************************************************************************whack a mole game */
// import WhackAMole from "./components/WhackAMole";
// import "./styles/WhackAMole.css";

// const App = () => {
//   return <WhackAMole />;
// };
// export default App;

// /******************************************************************Star rating screen using emoji */
// import StarRating from "./components/StarRating";
// const App = () => {
//   return <StarRating />;
// };
// export default App;

/*******************************************************************************search bar  */
import SearchBar from "./components/SearchBar";
const App = () => {
  return <SearchBar />;
};
export default App;
