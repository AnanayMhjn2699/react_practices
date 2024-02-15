import { useState } from "react";
import states from "../states";
import "../styles/StateDropDown.css";
const StateDropDown = () => {
  const [showMenu, setShowMenu] = useState(true);

  const [selectedStates2, setSelectedStates2] = useState(
    states.reduce((acc, state) => ({ ...acc, [state.key]: false }), {})
  );

  return (
    <>
      <div className="Main">
        <button className="mainDropDown" onClick={() => setShowMenu(!showMenu)}>
          {Object.values(selectedStates2).filter(Boolean).length === 0
            ? "Select any no of states"
            : `${
                Object.values(selectedStates2).filter(Boolean).length
              } states selected`}
        </button>
      </div>
      {showMenu &&
        states.map((state) => {
          return (
            <div className={selectedStates2[state.key] ? "blue" : ""}>
              <input
                id={`Checkbox${state.key}`}
                type="checkbox"
                onChange={(e) => {
                  setSelectedStates2({
                    ...selectedStates2,
                    [state.key]: e.target.checked,
                  });
                }}
              ></input>
              <label htmlFor={`Checkbox${state.key}`}>{state.name}</label>
            </div>
          );
        })}
    </>
  );
};

export default StateDropDown;
