import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar";
import ShowSidebar from "./components/ShowSidebar/ShowSidebar";

function App() {
  return (
    <main>
      <div className="header-sidebar-wrapper">
        <Sidebar />
        <ShowSidebar />
        <Header />
      </div>
    </main>
  );
}

export default App;
