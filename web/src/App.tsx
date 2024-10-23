import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";
import { ScrollSpyProvider } from "./components/layout/Header/useScrollSpyContex";
import MyPlatform from "./components/my-platform/MyPlatform";

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
        <MyPlatform />
      </Layout>
    </ScrollSpyProvider>
  );
}

export default App;
