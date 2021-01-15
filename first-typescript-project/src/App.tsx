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
};

export const App: FC = () => {
  const [activeTodosList, setActiveTodosList] = useState<TodoType[]>([]);

  const addTodoHandler: (x: TodoType) => void = (todoObject) => {
    setActiveTodosList((): TodoType[] => [...activeTodosList, todoObject]);
  };

  return (
    <>
      <header>
        <h1>ORGANIZE YOUR TIME EFFICIENTLY</h1>
        <img src={clock} alt="clock" />
      </header>
      <div className="app">
        <AddNewTodo addTodoHandler={addTodoHandler} />
        <Todos activeTodoList={activeTodosList} sectionTitle="Active Todos" />
        <Todos activeTodoList={[]} sectionTitle="Finished Todos" />
      </div>
    </>
  );
};

export default App;
