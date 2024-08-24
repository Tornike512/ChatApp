import searchIcon from "@app/assets/search-icon.svg";
import "./SearchBar.scss";

export function SearchBar() {
  return (
    <form className="search-bar">
      <input placeholder="Search..." type="text" />
      <img src={searchIcon} alt="Search Icon" />
    </form>
  );
}
