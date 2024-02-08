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

  //this is handle when no object is passed as state const [tasks, setTasks] = useState([]); means tasks is
  //just array of strings
  const handleAddTask = () => {
    if (!tasks.includes(data) && data.length > 0)
      setTasks((prevData) => {
        return [data, ...prevData];
      });
    setData("");
  };

  //this is handle when we are keeping data as objects to maintain it's completeness that is if it is
  //clicked it should be striked through
  const handleAddTask2 = () => {
    setTasks((prev) => [...prev, { todo: data, completed: false }]);
    setData("");
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
      <button onClick={handleAddTask2}>Add Task</button>
      <br></br>
      {tasks.map((task) => {
        return (
          <>
            <li
              style={{
                display: "inline",
                color: task.completed ? "red" : "",
                textDecoration: task.completed ? "line-through" : "",
              }}
              onClick={() => {
                const newArray = [...tasks];
                const match = newArray.find((i) => {
                  return i.todo === task.todo;
                });
                match.completed = !match.completed;
                setTasks(newArray);
              }}
            >
              {task.todo}
            </li>
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
