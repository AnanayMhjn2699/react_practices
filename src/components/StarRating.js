import { useState } from "react";

//🤩😞   "⭐" : "☆"
const StarRating = () => {
  const [rating, setRating] = useState(3);
  const handleClick = (i) => {
    setRating(i + 1);
  };
  return (
    //using carat-color property to hide the blinking cursor which appears when we click anything on screen
    //like te one which would be there if you click here😉
    <div style={{ cursor: "pointer", caretColor: "transparent" }}>
      {[...Array(10).keys()].map((i) => {
        return (
          <span key={i} onClick={() => handleClick(i)}>
            {i < rating ? "🤩" : "😞"}
          </span>
        );
      })}
    </div>
  );
};
export default StarRating;
