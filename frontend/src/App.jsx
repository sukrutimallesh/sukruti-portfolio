/**
 * Root application component.
 * Orchestrates data fetching and renders all portfolio sections.
 */

import { usePortfolio } from "./hooks/usePortfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  const { data, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-screen">
        <p style={{ color: "var(--color-text-secondary)" }}>
          Unable to load portfolio data. Please try again later.
        </p>
      </div>
    );
  }

  const { profile, experiences, projects, skills, education, certifications } = data;

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} certifications={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
};

export default App;
