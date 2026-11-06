import { useState } from "react";
import type { Todo } from "./types";
import TodoList from "./components/TodoList";

const initialTodos: Todo[] = [
  { id: 1, text: "Przeczytać dokumentację Reacta", done: true, priority: "normalny" },
  { id: 2, text: "Zrobić laboratorium nr 2", done: false, priority: "wysoki" },
  { id: 3, text: "Wyjść na spacer", done: false, priority: "niski" },
];

export default function App() {
  const [todos] = useState<Todo[]>(initialTodos);


  return (
    <>
      <h1>✅ Lista zadań</h1>
      <TodoList todos={todos} />
    </>
  );
}
