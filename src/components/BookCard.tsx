import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";

type BookCardProps = { book: Book };

export default function BookCard({ book }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article>
      <h3>{title}</h3>
      <p>
        {author} · {year}
      </p>
      <p>
        <Badge>{genre}</Badge>
      </p>
      <p>{stars(rating)}</p>
      <p>{formatPrice(price)}</p>
      {available ? (
        <Badge tone="success">Dostępna</Badge>
      ) : (
        <Badge tone="warning">Brak w magazynie</Badge>
      )}
    </article>
  );
}