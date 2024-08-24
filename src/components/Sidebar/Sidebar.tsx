import { SearchBar } from "./SearchBar";
import { User } from "./User";

import "./Sidebar.scss";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <SearchBar />
      <h2>Users</h2>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </aside>
  );
}

export default Sidebar;
