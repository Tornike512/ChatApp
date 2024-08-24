import { SearchBar } from "./SearchBar";

import "./Sidebar.scss";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <SearchBar />
      <h2>Users</h2>
    </aside>
  );
}

export default Sidebar;
