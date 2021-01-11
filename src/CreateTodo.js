import axios from "axios";
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { config } from "./config";
import { useHistory } from "react-router";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const history = useHistory();

  const submitTodo = () => {
    axios
      .post(
        `${config.baseApi}/todo/new`,
        { title, text: description, completed },
        {
          headers: {
            "x-auth": localStorage.getItem("token"),
          },
        }
      )
      .then(history.push("/"))
      .catch(console.error);
  };

  return (
    <TodoForm
      title={title}
      changeTitle={(e) => setTitle(e.target.value)}
      description={description}
      changeDescription={(e) => setDescription(e.target.value)}
      submitTodo={submitTodo}
      setCompleted={() => {
        setCompleted(!completed);
      }}
      completed={completed}
    />
  );
};
