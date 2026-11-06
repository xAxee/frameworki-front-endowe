import type { Filter } from "../types";

type TodoFilterProps = {
  filter: Filter;
  counts: Record<Filter, number>;
  onFilterChange: (filter: Filter) => void;
};

const filters: Filter[] = ["wszystkie", "aktywne", "zrobione"];

export default function TodoFilter({ filter, counts, onFilterChange }: TodoFilterProps) {
  return (
    <div className="filter-group" role="group" aria-label="Filtruj zadania">
      {filters.map((value) => (
        <button
          key={value}
          type="button"
          className={filter === value ? "primary" : ""}
          aria-pressed={filter === value}
          onClick={() => onFilterChange(value)}
        >
          {value} ({counts[value]})
        </button>
      ))}
    </div>
  );
}