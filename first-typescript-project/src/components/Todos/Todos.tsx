import { FC } from "react";

interface TodoType {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
}

type ActiveTodosProps = {
  activeTodoList: TodoType[] | undefined;
  sectionTitle: string;
};

export const Todos: FC<ActiveTodosProps> = ({
  activeTodoList,
  sectionTitle,
}) => {
  return (
    <section className="todos">
      <div>
        <strong>{sectionTitle}</strong>
      </div>
      <p className="todo-content-box">
        {activeTodoList?.map((listItem, i) => {
          return (
            <>
              <ul key={i} id={`a--todo--${i}`}>
                <li>{listItem.name + " " + listItem.surname}</li>
                <li>{listItem.email}</li>
                <li>{listItem.function}</li>
                <p>{listItem.msg}</p>
              </ul>
            </>
          );
        })}
      </p>
    </section>
  );
};
