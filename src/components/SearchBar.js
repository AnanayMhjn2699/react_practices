import { useState } from "react";

const data = ["Apple", "bot", "Banana", "Ball", "Cat", "Catch", "coat", "Dog"];

const SearchBar = () => {
  const [text, setText] = useState("");
  const filterList =
    text.length === 0
      ? []
      : data.filter((elem) => {
          return elem.toLowerCase().includes(text.toLowerCase());
        });

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        placeholder="enter text to search...."
        value={text}
        onChange={(e) => handleChange(e)}
      ></input>
      {filterList.map((elem) => {
        return <p>{elem}</p>;
      })}
    </>
  );
};
export default SearchBar;
