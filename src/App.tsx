import { books } from "./data/books";
import BookList from "./components/BookList";

export default function App() {
  return (
    <>
      <h1>📚 Katalog książek</h1>
      <BookList books={books} />
    </>
  );
}
