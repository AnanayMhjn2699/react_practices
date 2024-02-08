import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState("");

  const handelDelete = (task) => {
    setTasks(
      tasks.filter((elem) => {
        return elem !== task;
      })
    );
  };

  return (
    <>
      <input
        placeholder="Enter your to do task here..."
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (!tasks.includes(data) && data.length > 0)
            setTasks((prevData) => {
              return [data, ...prevData];
            });
          setData("");
        }}
      >
        Add Task
      </button>
      <br></br>
      {tasks.map((task) => {
        return (
          <>
            <li style={{ display: "inline" }}>{task}</li>
            {/* <button onClick={() => handelDelete(task)}>Delete</button> */}
            <button
              onClick={() => {
                setTasks(
                  tasks.filter((elem) => {
                    return elem !== task;
                  })
                );
              }}
            >
              Delete
            </button>
            <br></br>
          </>
        );
      })}
    </>
  );
};
export default ToDo;
