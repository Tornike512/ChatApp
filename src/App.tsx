import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar";
import { SignIn } from "./components/SignIn";
import ShowSidebar from "./components/ShowSidebar/ShowSidebar";

function App() {
  return (
    <main>
      {/* <div className="header-sidebar-wrapper">
        <Sidebar />
        <ShowSidebar />
        <Header />
      </div> */}
      <SignIn />
    </main>
  );
}

export default App;
