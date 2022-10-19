import Contact from "./components/Contact";
import AboutMe from "./components/layout/AboutMe";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/layout/Projects";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
