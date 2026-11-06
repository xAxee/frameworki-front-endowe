import { useState } from "react";
import type { Filter, Priority, Todo } from "./types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import NewsletterForm from "./components/NewsletterForm";

const initialTodos: Todo[] = [
  { id: 1, text: "Przeczytać dokumentację Reacta", done: true, priority: "normalny" },
  { id: 2, text: "Zrobić laboratorium nr 2", done: false, priority: "wysoki" },
  { id: 3, text: "Wyjść na spacer", done: false, priority: "niski" },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<Filter>("wszystkie");

  const addTodo = (text: string, priority: Priority) => {
    const todo: Todo = { id: Date.now(), text, priority, done: false };
    setTodos((prev) => [...prev, todo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => todo.id === id ? { ...todo, text } : todo),
    );
  };

  const deleteCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  };

  const counts: Record<Filter, number> = {
    wszystkie: todos.length,
    aktywne: todos.filter((todo) => !todo.done).length,
    zrobione: todos.filter((todo) => todo.done).length,
  };

  const visibleTodos = todos.filter((todo) =>
    filter === "wszystkie" ? true : filter === "aktywne" ? !todo.done : todo.done,
  );

  return (
    <main>
      <h1>✅ Lista zadań</h1>
      <section className="panel" aria-labelledby="add-heading">
        <h2 id="add-heading">Dodaj zadanie</h2>
        <TodoForm onAdd={addTodo} />
      </section>
      <section className="panel" aria-labelledby="list-heading">
        <div className="section-heading">
          <h2 id="list-heading">Twoje zadania</h2>
          {counts.zrobione > 0 && (
            <button type="button" className="danger" onClick={deleteCompleted}>
              Usuń zrobione ({counts.zrobione})
            </button>
          )}
        </div>
        <TodoFilter filter={filter} counts={counts} onFilterChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </section>
      <section className="panel" aria-labelledby="newsletter-heading">
        <h2 id="newsletter-heading">Newsletter</h2>
        <p className="muted">Formularz demonstracyjny — nie wysyła danych na serwer.</p>
        <NewsletterForm />
      </section>
    </main>
  );
}
