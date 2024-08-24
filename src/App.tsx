import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <main>
      <div className="header-sidebar-wrapper">
        <Sidebar />
        <Header />
      </div>
    </main>
  );
}

export default App;
