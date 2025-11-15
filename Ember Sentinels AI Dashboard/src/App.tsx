import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Guide from "./pages/Guide";

function App() {
  const [currentPage, setCurrentPage] = useState<"dashboard" | "guide">("dashboard");

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === "dashboard" ? <Dashboard /> : <Guide />}
    </>
  );
}

export default App;
