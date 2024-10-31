import { SearchBar } from "./SearchBar";
import { User } from "./User";
import { ReceiveAllUsers } from "@app/Hooks/ReceiveAllUsers";

import "./Sidebar.scss";

export function Sidebar() {
  const { allUsernames } = ReceiveAllUsers();

  return (
    <aside className="sidebar">
      <SearchBar />
      <h2>Users</h2>
      {allUsernames.map((user: any) => {
        return <User user={user} />;
      })}
    </aside>
  );
}

export default Sidebar;
