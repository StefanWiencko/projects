import { Dispatch, FC, SetStateAction } from "react";
import check from "../../assets/check.svg";
import cancel from "../../assets/cancel.svg";

interface TodoType {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
  id: number;
}

type ActiveTodosProps = {
  todoList: TodoType[] | undefined;
  sectionTitle: string;
  onClickHandler: (x: TodoType) => void;
  spliceHandler: Dispatch<SetStateAction<TodoType[]>>;
};

export const Todos: FC<ActiveTodosProps> = ({
  todoList,
  sectionTitle,
  onClickHandler,
  spliceHandler,
}) => {
  const setIcon = (prop: string) => {
    if (prop === "Active Todos") return check;
    if (prop === "Finished Todos") return cancel;
  };

  return (
    <section className="todos">
      <div>
        <strong>{sectionTitle}</strong>
      </div>
      <p className="todo-content-box">
        {todoList?.map((listItem, i) => {
          return (
            <ul key={i} id={`a--todo--${i}`}>
              <li>{listItem.name + " " + listItem.surname}</li>
              <li>{listItem.email}</li>
              <li>{listItem.function}</li>
              <p>{listItem.msg}</p>
              <button
                style={{ backgroundImage: `url(${setIcon(sectionTitle)})` }}
                onClick={(e) => {
                  e.preventDefault();
                  onClickHandler(listItem);
                  spliceHandler(() => {
                    return todoList.splice(i);
                  });
                }}
              ></button>
            </ul>
          );
        })}
      </p>
    </section>
  );
};
