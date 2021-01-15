import React, { FC, FormEvent } from "react";
import { useForm } from "../Hooks/useForm";

type TodoType = {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
};

interface AddNewTodoProps {
  addTodoHandler: (x: TodoType) => void;
}

export const AddNewTodo: FC<AddNewTodoProps> = ({ addTodoHandler }) => {
  const [value, setValue] = useForm({
    name: "",
    surname: "",
    email: "",
    function: "",
    msg: "",
  });
  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    addTodoHandler(value);
  };
  return (
    <form onSubmit={submitHandler} className="add-new-todo">
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input
            value={value.name}
            onChange={setValue}
            type="text"
            name="name"
          />
        </li>
        <li>
          <label htmlFor="surname">Surname</label>
          <input
            value={value.surname}
            onChange={setValue}
            type="text"
            name="surname"
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            value={value.email}
            onChange={setValue}
            type="email"
            name="email"
          />
        </li>
        <li>
          <label htmlFor="function">Occupation</label>
          <select
            value={value.function}
            onChange={setValue}
            name="function"
            id="function"
          >
            <option value="">Wybierz funkcje...</option>
            <option value="master">Master</option>
            <option value="promotor">Promotor</option>
            <option value="admin">Admin</option>
          </select>
        </li>
        <li>
          <label htmlFor="msg">Message</label>
          <textarea value={value.msg} onChange={setValue} name="msg" />
        </li>
        <li>
          <input type="submit" name="submit" />
        </li>
        <li>
          <div className="error1" style={{ visibility: "hidden" }}>
            <p>Błąd: Nie wypełniłeś wszystkich pól</p>
          </div>
        </li>
      </ul>
    </form>
  );
};
