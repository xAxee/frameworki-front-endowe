import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = { book: Book; onSelect: (book: Book) => void };

export default function BookCard({ book, onSelect }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article
      className={styles.card}
      onClick={() => onSelect(book)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(book);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Pokaż szczegóły książki: ${title}`}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.meta}>
        {author} · {year}
      </p>
      <p className={styles.meta}>
        <Badge>{genre}</Badge>
      </p>
      <div className={styles.footer}>
        <div>
          <p className={styles.rating}>{stars(rating)}</p>
          <p className={styles.price}>{formatPrice(price)}</p>
        </div>
        {available ? (
          <Badge tone="success">Dostępna</Badge>
        ) : (
          <Badge tone="warning">Brak w magazynie</Badge>
        )}
      </div>
    </article>
  );
}