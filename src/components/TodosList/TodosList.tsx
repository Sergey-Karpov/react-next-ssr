import { Space } from "antd";
import { ReactElement } from "react";
import Api from "../../api/api";
import { Todos, ITodo } from "../../models";
import Todo from "../Todo/Todo";

const getData = async (): Promise<Todos> => {
  const data = await Api.getTodos();
  return data;
};

const TodosList = async (): Promise<ReactElement> => {
  const data = await getData();

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {data.map((todo: ITodo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Space>
  );
};

export default TodosList;
