import { motion } from "framer-motion";

export default function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      layout
      className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer ${
        todo.done
          ? "bg-green-100 text-gray-500 line-through"
          : "bg-white border border-gray-300 hover:bg-gray-50"
      }`}
      onClick={() => toggleDone(todo.id)}
    >
      <div className="flex items-center gap-3">
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
      >
        Delete
      </button>
    </motion.li>
  );
}
