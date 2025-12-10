// components/TodoList.jsx
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleDone, deleteTodo }) {
  if (!todos.length) {
    return (
      <p className="text-center text-gray-500">No todos yet — add one above!</p>
    );
  }
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
