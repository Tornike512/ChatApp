import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar";
import { SignOrRegister } from "./components/SignOrRegister";
import ShowSidebar from "./components/ShowSidebar/ShowSidebar";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Providers/GlobalProvider";

function App() {
  const { setJoinClicked, joinClicked } = useContext(GlobalContext);

  useEffect(() => {
    setJoinClicked(false);
  }, []);

  return (
    <main>
      {joinClicked ? (
        <div className="header-sidebar-wrapper">
          <Sidebar />
          <ShowSidebar />
          <Header />
        </div>
      ) : (
        <SignOrRegister />
      )}
    </main>
  );
}

export default App;
