import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, handleSearch }) {
  return (
    <div className={css.search}>
      <label className={css["search-label"]}>
        <span>Find contacts by name:</span>
        <input className={css["search-input"]} type="text" id="search" placeholder="Enter your characters..." autoComplete="off" value={searchValue} onChange={handleSearch} />
      </label>
    </div>
  );
}
