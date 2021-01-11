import React from "react";

export const Todo = ({
  id,
  title,
  description,
  isCompleted,
  completedAt,
  onCompleteCheck,
}) => {
  return (
    <div className="todo">
      <h1 className="todo-title">{title}</h1>
      <input
        type="checkbox"
        id={id}
        name={description}
        defaultChecked={isCompleted}
        onChange={onCompleteCheck}
      />
      <label htmlFor={description}>{description}</label>
      {completedAt ? <p>Completed at: {completedAt}</p> : ""}
    </div>
  );
};
