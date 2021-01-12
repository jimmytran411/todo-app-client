/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";
import { getTodos } from "./resources";
import { Todo } from "./Todo";
import { getToken } from "./utils/auth";

export const Todos = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => {
        setTodoList(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, [getTodos, setTodoList]);

  const onCompleteCheck = (event) => {
    let id = event.target.id;
    let completed = event.target.checked;
    axios
      .patch(
        `${config.baseApi}/todo/${id}`,
        { completed, id },
        {
          headers: {
            "x-auth": getToken(),
          },
        }
      )
      .then((res) => {
        setTodoList((prevTodoList) => {
          return prevTodoList.map((item) => {
            if (item._id === res.data.todo._id) {
              return res.data.todo;
            } else {
              return item;
            }
          });
        });
      })
      .catch(console.error);
  };

  const onDeleteClick = (event) => {
    let id = event.target.id;
    axios
      .delete(`${config.baseApi}/todo/${id}`, {
        headers: {
          "x-auth": getToken(),
        },
      })
      .then((res) => {
        setTodoList((prevTodoList) => {
          return prevTodoList.filter((item) => {
            return item._id !== res.data.todo._id;
          });
        });
      })
      .catch(console.error);
  };

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
                onCompleteCheck={onCompleteCheck}
              />{" "}
              <Link to={`/todo/${data._id}`}>
                <button>Edit</button>
              </Link>
              <button id={data._id} onClick={onDeleteClick}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
