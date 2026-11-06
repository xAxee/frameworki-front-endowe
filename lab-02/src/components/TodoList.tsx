import type { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) return <p className="muted">Brak zadań do wyświetlenia 🎉</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} <small className="muted">({todo.priority})</small>
        </li>
      ))}
    </ul>
  );
}
