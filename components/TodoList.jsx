import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleDone, deleteTodo }) {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}
