import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function MainContent() {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollSpyProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/platform" element={<MyPlatform />} />
          </Routes>
        </Layout>
      </ScrollSpyProvider>
    </Router>
  );
}

export default App;
