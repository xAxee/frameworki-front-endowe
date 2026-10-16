import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = { book: Book };

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article className={styles.card}>
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