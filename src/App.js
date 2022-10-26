import Contact from "./components/layout/Contact";
import AboutMe from "./components/layout/AboutMe";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/layout/Projects";
// import Email from "./components/Email";
// import Social from "./components/Social";

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
