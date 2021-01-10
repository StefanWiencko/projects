import { FunctionComponent } from "react";
import { useForm } from "../Hooks/useForm";

export const AddNewTodo: FunctionComponent = () => {
  const [value, setValue] = useForm({
    name: "",
    surname: "",
    email: "",
    function: "",
    msg: "",
  });

  console.log(value);
  return (
    <form className="add-new-todo">
      <ul>
        <li>
          <label htmlFor="name"></label>
          <input value={value.name} type="text" name="name" />
        </li>
        <li>
          <label htmlFor="surname"></label>
          <input value={value.surname} type="text" name="surname" />
        </li>
        <li>
          <label htmlFor="email"></label>
          <input value={value.email} type="email" name="email" />
        </li>
        <li>
          <label htmlFor="function"></label>
          <select value={value.function} name="function" id="function">
            <option value="">Wybierz funkcje...</option>
            <option value="master">Master</option>
            <option value="promotor">Promotor</option>
            <option value="admin">Admin</option>
          </select>
        </li>
        <li>
          <label htmlFor="msg"></label>
          <textarea value={value.msg} name="msg" />
        </li>
        <li>
          <input type="submit" name="submit" />
        </li>
      </ul>
    </form>
  );
};
