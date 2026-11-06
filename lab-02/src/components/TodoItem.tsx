import { useState } from "react";
import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const errorId = `edit-error-${todo.id}`;
  const isInvalid = draft.trim().length < 3;

  const startEdit = () => {
    setDraft(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (isInvalid) return;
    onEdit(todo.id, draft.trim());
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item priority-${todo.priority}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          aria-label={`Wykonane: ${todo.text}`}
        />
        {isEditing ? (
          <div className="edit-field">
            <input
              autoFocus
              aria-label="Edytowana treść zadania"
              aria-invalid={isInvalid}
              aria-describedby={isInvalid ? errorId : undefined}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.nativeEvent.isComposing) return;
                if (event.key === "Enter") {
                  event.preventDefault();
                  saveEdit();
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  cancelEdit();
                }
              }}
            />
            {isInvalid && (
              <span className="error" id={errorId} role="alert">
                Treść musi mieć co najmniej 3 znaki.
              </span>
            )}
          </div>
        ) : (
          <span
            className="todo-text"
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
        )}
        <small className="priority-label">{todo.priority}</small>
      </div>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button type="button" className="primary" disabled={isInvalid} onClick={saveEdit}>
              Zapisz
            </button>
            <button type="button" onClick={cancelEdit}>Anuluj</button>
          </>
        ) : (
          <>
            <button type="button" onClick={startEdit}>Edytuj</button>
            <button type="button" className="danger" onClick={() => onDelete(todo.id)}>
              Usuń
            </button>
          </>
        )}
      </div>
    </li>
  );
}