import Header from "./components/layout/Header/Header";
import Hero from "./components/home/Hero/Hero";
import About from "./components/home/About/About";
import Resume from "./components/resume/Resume/Resume";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
