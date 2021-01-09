import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { config } from "./config";
import { useHistory } from "react-router";
import { getToken } from "./utils/auth";

export const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState();
  const history = useHistory();
  const idArr = window.location.href.split("/");
  const id = idArr[idArr.length - 1];

  useEffect(() => {
    axios
      .get(`${config.baseApi}/todo/${id}`)
      .then((res) => {
        let data = res.data.todo;
        setTitle(data.title);
        setDescription(data.text);
        setCompleted(data.completed);
      })
      .catch(console.error);
  }, [setTitle, setDescription, setCompleted]);

  const submitTodo = () => {
    axios
      .patch(
        `${config.baseApi}/todo/${id}`,
        { title, text: description, completed, id },
        {
          headers: {
            "x-auth": getToken(),
          },
        }
      )
      .then(history.push("/"))
      .catch(console.error);
  };

  const onDeleteClick = () => {
    axios
      .delete(`${config.baseApi}/todo/${id}`, {
        headers: {
          "x-auth": getToken(),
        },
      })
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch(console.error);
  };

  return (
    <div>
      <TodoForm
        title={title}
        changeTitle={(e) => setTitle(e.target.value)}
        description={description}
        changeDescription={(e) => setDescription(e.target.value)}
        submitTodo={submitTodo}
        setCompleted={() => {
          setCompleted(!completed);
          console.log(completed);
        }}
        completed={completed}
      />
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};
