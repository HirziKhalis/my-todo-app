"use client";

import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("my_todos_v1");
      if (raw) setTodos(JSON.parse(raw));
    } catch (err) {
      console.error("Failed to load todos", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("my_todos_v1", JSON.stringify(todos));
    } catch (err) {
      console.error("Failed to save todos", err);
    }
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), done: false },
    ]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">My Todo List</h1>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      </div>
    </main>
  );
}
