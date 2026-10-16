import type { Book } from "../types";
import BookCard from "./BookCard";
import styles from "./BookList.module.css";

type BookListProps = { books: Book[] };

export default function BookList({ books }: BookListProps) {
  if (books.length === 0) {
    return <p>Brak książek spełniających kryteria.</p>;
  }

  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}