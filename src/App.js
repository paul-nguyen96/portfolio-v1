import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Hero />
        <main> Content</main>
      </div>
    </Router>
  );
}

export default App;
