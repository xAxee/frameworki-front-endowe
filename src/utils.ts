/** Formatowanie ceny w złotych, np. 39.9 -> "39,90 zł". */
export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(value);

/** Zamiana oceny liczbowej na gwiazdki, np. 4 -> "★★★★☆". */
export const stars = (rating: number): string =>
  "★".repeat(rating) + "☆".repeat(5 - rating);
