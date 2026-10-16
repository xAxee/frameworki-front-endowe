import type { Genre } from "../types";
import styles from "./FilterBar.module.css";

type GenreFilter = Genre | "wszystkie";

type FilterBarProps = {
  genre: GenreFilter;
  onlyAvailable: boolean;
  onGenreChange: (genre: GenreFilter) => void;
  onOnlyAvailableChange: (onlyAvailable: boolean) => void;
};

export default function FilterBar({
  genre,
  onlyAvailable,
  onGenreChange,
  onOnlyAvailableChange,
}: FilterBarProps) {
  return (
    <div className={styles.filters}>
      <label>
        Gatunek
        <select
          value={genre}
          onChange={(event) => onGenreChange(event.target.value as GenreFilter)}
        >
          <option value="wszystkie">Wszystkie</option>
          <option value="fantastyka">Fantastyka</option>
          <option value="kryminał">Kryminał</option>
          <option value="reportaż">Reportaż</option>
          <option value="informatyka">Informatyka</option>
        </select>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(event) => onOnlyAvailableChange(event.target.checked)}
        />
        Tylko dostępne
      </label>
    </div>
  );
}