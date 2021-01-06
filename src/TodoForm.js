import React, { useState } from "react";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState();
  const [completedAt, setCompletedAt] = useState();

  const todoSubmit = () => {
    console.log("hello world");
  };

  const onCheck = () => {
    if (isCompleted) {
      setIsCompleted(false);
      return true;
    } else {
      setIsCompleted(true);
      return false;
    }
  };

  return (
    <div>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          todoSubmit();
        }}
      >
        <div className="form-input">
          <label htmlFor="title">
            Title
            <input
              id="title"
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="form-input">
          <label htmlFor="description">
            Description
            <input
              id="description"
              type="description"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>
        </div>
        {/* <input type="checkbox" onChange={onCheck()} /> */}

        <button className="login-btn">Save</button>
      </form>
    </div>
  );
};
