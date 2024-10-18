import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";
import { ScrollSpyProvider } from "./components/layout/Header/useScrollSpyContex";

function App() {
  return (
    <ScrollSpyProvider>
      <Layout>
        <Home />
        <About />
        <Resume />
        <Services />
        <Projects />
        <Contact />
      </Layout>
    </ScrollSpyProvider>
  );
}

export default App;
