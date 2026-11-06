import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) return <p className="muted">Brak zadań do wyświetlenia 🎉</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
