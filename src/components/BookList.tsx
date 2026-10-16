import type { Book } from "../types";
import BookCard from "./BookCard";

type BookListProps = { books: Book[] };

export default function BookList({ books }: BookListProps) {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}