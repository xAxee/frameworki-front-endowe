import { useState } from "react";
import type { FormEvent } from "react";
import type { Priority } from "../types";

type TodoFormProps = {
  onAdd: (text: string, priority: Priority) => void;
};

const priorities: Priority[] = ["niski", "normalny", "wysoki"];

function validateText(text: string): string {
  const trimmedText = text.trim();
  if (trimmedText.length === 0) return "Treść zadania jest wymagana.";
  if (trimmedText.length < 3) return "Treść musi mieć co najmniej 3 znaki.";
  if (trimmedText.length > 80) return "Treść może mieć maksymalnie 80 znaków.";
  return "";
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("normalny");
  const [touched, setTouched] = useState(false);
  const error = validateText(text);
  const showError = touched && error !== "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
    if (error !== "") return;
    onAdd(text.trim(), priority);
    setText("");
    setPriority("normalny");
    setTouched(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="todo-text">Treść zadania</label>
        <input
          id="todo-text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={showError}
          aria-describedby={showError ? "todo-text-error" : undefined}
        />
        {showError && (
          <span id="todo-text-error" className="error" role="alert">{error}</span>
        )}
      </div>
      <div className="field">
        <label htmlFor="todo-priority">Priorytet</label>
        <select
          id="todo-priority"
          value={priority}
          onChange={(event) => {
            const value = event.target.value;
            if (value === "niski" || value === "normalny" || value === "wysoki") {
              setPriority(value);
            }
          }}
        >
          {priorities.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>
      <button type="submit" className="primary">Dodaj</button>
    </form>
  );
}