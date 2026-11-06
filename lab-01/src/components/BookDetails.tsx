import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: Book;
  onClose: () => void;
};

export default function BookDetails({ book, onClose }: BookDetailsProps) {
  return (
    <section className={styles.details} aria-labelledby="book-details-title">
      <div className={styles.header}>
        <h2 id="book-details-title">Szczegóły książki</h2>
        <button type="button" onClick={onClose}>
          Zamknij
        </button>
      </div>
      <h3>{book.title}</h3>
      <dl className={styles.info}>
        <div><dt>Autor</dt><dd>{book.author}</dd></div>
        <div><dt>Rok wydania</dt><dd>{book.year}</dd></div>
        <div><dt>Gatunek</dt><dd><Badge>{book.genre}</Badge></dd></div>
        <div><dt>Ocena</dt><dd>{stars(book.rating)}</dd></div>
        <div><dt>Cena</dt><dd>{formatPrice(book.price)}</dd></div>
        <div>
          <dt>Dostępność</dt>
          <dd>
            {book.available ? (
              <Badge tone="success">Dostępna</Badge>
            ) : (
              <Badge tone="warning">Brak w magazynie</Badge>
            )}
          </dd>
        </div>
      </dl>
    </section>
  );
}