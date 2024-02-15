import { useState } from "react";
import "../styles/MultiSelectSearchBar.css";

const mainData = [
  "Apple",
  "Mango",
  "Ant",
  "Anchor",
  "Ball",
  "Bat",
  "Baron",
  "Mat",
  "Man",
];
const MultiSelectSearchBar = () => {
  const [data, setData] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const handleClick = () => {
    const newData = mainData.filter((elem) => {
      return elem.toLocaleLowerCase().includes(data.toLocaleLowerCase());
    });
    setSearchedData(newData);
    setData("");
  };
  return (
    <div className="mainDiv">
      <div className="subDiv">
        {selectedData.map((elem, index) => {
          return (
            <span
              className="selected-data"
              key={index}
              onClick={() => {
                setSelectedData(
                  selectedData.filter((ele) => {
                    return ele !== elem;
                  })
                );
              }}
            >
              {elem}
            </span>
          );
        })}

        <input
          placeholder="Enter text to search.."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick();
          }}
          onChange={(e) => {
            setData(e.target.value);
          }}
          value={data}
        ></input>
      </div>

      <button onClick={handleClick}>Search</button>

      <ul>
        {searchedData.map((elem, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                if (
                  !selectedData.some((ele) => {
                    return ele === elem;
                  })
                )
                  setSelectedData((prev) => [...prev, elem]);
              }}
            >
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MultiSelectSearchBar;
