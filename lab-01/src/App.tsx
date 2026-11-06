import { useState } from "react";
import { books } from "./data/books";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import FilterBar from "./components/FilterBar";
import type { Book, Genre } from "./types";

type GenreFilter = Genre | "wszystkie";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const visibleBooks = books.filter(
    (book) =>
      (genre === "wszystkie" || book.genre === genre) &&
      (!onlyAvailable || book.available),
  );

  return (
    <>
      <h1>Katalog książek</h1>
      <FilterBar
        genre={genre}
        onlyAvailable={onlyAvailable}
        onGenreChange={setGenre}
        onOnlyAvailableChange={setOnlyAvailable}
      />
      <p>Znaleziono: {visibleBooks.length}</p>
      <BookList books={visibleBooks} onBookSelect={setSelectedBook} />
      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}
