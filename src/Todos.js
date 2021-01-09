import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "./resources";
import { Todo } from "./Todo";

export const Todos = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => {
        setTodoList(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, [getTodos, setTodoList]);

  return (
    <div>
      <div className="new-btn">
        <Link to="/todo/new">
          <button>Create new todo</button>
        </Link>
      </div>
      <div className="todo-list">
        {!todoList.length ? (
          <h2>Loading ... </h2>
        ) : (
          todoList.map((data) => (
            <div key={data._id}>
              <Todo
                id={data._id}
                title={data.title}
                description={data.text}
                isCompleted={data.completed}
                completedAt={data.completedAt}
              />{" "}
              <Link to={`/todo/${data._id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
