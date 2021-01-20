import { FC, useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { Todos } from "./components/Todos/Todos";
import clock from "./assets/logo-clock-in-a-fire-vector-5271403.jpg";
import "./sass/main.scss";

type TodoType = {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
  id: number;
};

export const App: FC = () => {
  const [activeTodosList, setActiveTodosList] = useState<TodoType[]>([]);
  const [finishedTodosList, setFinishedTodosList] = useState<TodoType[]>([]);

  const addTodoHandler: (x: TodoType) => void = (todoObject) => {
    // debugger;
    const arr = [...activeTodosList, todoObject];
    const mergedArr = arr;
    const finalArr = mergedArr.map((el, i) => {
      console.log(i);
      el.id = i;
      return el;
    });
    setActiveTodosList((): TodoType[] => finalArr);
  };
  const activeTodoHandler: (x: TodoType) => void = (todoObject) => {
    const arr = [...finishedTodosList, todoObject];
    setFinishedTodosList((): TodoType[] => arr);
  };

  return (
    <>
      <header>
        <h1>ORGANIZE YOUR TIME EFFICIENTLY</h1>
        <img src={clock} alt="clock" />
      </header>
      <div className="app">
        <AddNewTodo addTodoHandler={addTodoHandler} />
        <Todos
          todoList={activeTodosList}
          onClickHandler={activeTodoHandler}
          spliceHandler={setActiveTodosList}
          sectionTitle="Active Todos"
        />
        <Todos
          todoList={finishedTodosList}
          onClickHandler={addTodoHandler}
          spliceHandler={setActiveTodosList}
          sectionTitle="Finished Todos"
        />
      </div>
    </>
  );
};

export default App;
