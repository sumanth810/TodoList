// src/App.js
import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="text-center font-sans p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
