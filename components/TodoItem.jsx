// components/TodoItem.jsx
export default function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <li
      className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer ${
        todo.done
          ? "bg-green-100 text-gray-500 line-through"
          : "bg-white border border-gray-300 hover:bg-gray-50"
      }`}
    >
      <div
        className="flex items-center gap-3"
        onClick={() => toggleDone(todo.id)}
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(todo.id)}
          onClick={(e) => e.stopPropagation()}
        />
        <span>{todo.text}</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}
