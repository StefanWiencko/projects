import { FC } from "react";

interface TodoType {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
}

type ActivetodosProps = {
  activeTodoList: TodoType[] | undefined;
};

export const ActiveTodos: FC<ActivetodosProps> = ({ activeTodoList }) => {
  return (
    <section className="active--todos">
      <div>
        <strong>Todos</strong>
      </div>
      <p>
        {activeTodoList?.map((listItem) => {
          return (
            <>
              <ul>
                <li>{listItem.name + " " + listItem.surname}</li>
                <li>{listItem.email}</li>
                <li>{listItem.function}</li>
              </ul>
              <p>{listItem.msg}</p>
            </>
          );
        })}
      </p>
    </section>
  );
};
