import Header from "./components/layout/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume/Resume";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
