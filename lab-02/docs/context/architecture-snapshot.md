# Architektura

- React 19, TypeScript strict, Vite. Bez dodatkowych bibliotek UI i zarządzania stanem.
- App przechowuje todos i filter. Każda aktualizacja listy używa setTodos(prev => ...), map, filter lub spread.
- Id nowego zadania pochodzi z Date.now(), zgodnie z poleceniem.
- Typy Todo, Priority i Filter znajdują się w src/types.ts.
- TodoForm przechowuje kontrolowane text, priority i touched. Błąd jest wyliczany podczas renderowania; walidacja dotyczy treści po trim().
- TodoList przekazuje callbacki do TodoItem i używa key={todo.id}.
- TodoItem przechowuje tylko tryb edycji i draft; rozpoczęcie i anulowanie edycji odczytuje aktualne todo.text.
- TodoFilter otrzymuje filtr i pochodne liczniki. Widoczna lista nie jest dodatkowym stanem.
- NewsletterForm odczytuje FormData, waliduje regexem, używa useRef do fokusu oraz natywnego setCustomValidity/reportValidity. Po sukcesie resetuje formularz. Nie używa useState i nie wysyła danych na serwer.
- Globalne style responsywne znajdują się w src/index.css.