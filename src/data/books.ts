import type { Book } from "../types";

export const books: Book[] = [
  { id: 1, title: "Wiedźmin. Ostatnie życzenie", author: "Andrzej Sapkowski", year: 1993, genre: "fantastyka", rating: 5, price: 39.9, available: true },
  { id: 2, title: "Solaris", author: "Stanisław Lem", year: 1961, genre: "fantastyka", rating: 5, price: 34.5, available: true },
  { id: 3, title: "Czysty kod", author: "Robert C. Martin", year: 2008, genre: "informatyka", rating: 4, price: 89, available: true },
  { id: 4, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018, genre: "informatyka", rating: 4, price: 75, available: false },
  { id: 5, title: "Zbrodnia i kara", author: "Fiodor Dostojewski", year: 1866, genre: "kryminał", rating: 4, price: 29.9, available: true },
  { id: 6, title: "Morderstwo w Orient Expressie", author: "Agatha Christie", year: 1934, genre: "kryminał", rating: 4, price: 32, available: false },
  { id: 7, title: "Cesarz", author: "Ryszard Kapuściński", year: 1978, genre: "reportaż", rating: 5, price: 36, available: true },
  { id: 8, title: "Gottland", author: "Mariusz Szczygieł", year: 2006, genre: "reportaż", rating: 4, price: 28, available: true },
  { id: 9, title: "Learning React", author: "Alex Banks, Eve Porcello", year: 2020, genre: "informatyka", rating: 4, price: 69, available: true },
  { id: 10, title: "Diuna", author: "Frank Herbert", year: 1965, genre: "fantastyka", rating: 5, price: 54.9, available: true },
];
