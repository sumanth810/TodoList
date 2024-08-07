// src/components/TodoItem.js
import React from "react";

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded shadow">
      <span className={todo.isCompleted ? "line-through" : ""}>
        {todo.text}
      </span>
      <div>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
