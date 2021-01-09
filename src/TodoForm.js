import React from "react";

export const TodoForm = ({
  submitTodo,
  title,
  description,
  changeTitle,
  changeDescription,
  completed,
  setCompleted,
}) => {
  return (
    <div>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitTodo();
        }}
      >
        <div className="form-input">
          <label htmlFor="title">
            Title
            <input
              id="title"
              value={title}
              placeholder="title"
              onChange={changeTitle}
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
              onChange={changeDescription}
            ></input>
          </label>
        </div>
        <label htmlFor="completed">
          Complete
          <input
            type="checkbox"
            onChange={setCompleted}
            defaultChecked={completed}
          />
        </label>

        <button className="login-btn">Save</button>
      </form>
    </div>
  );
};
