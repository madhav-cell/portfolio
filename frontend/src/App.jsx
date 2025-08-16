import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import GitHubActivity from "./components/GitHubActivity.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <GitHubActivity />
      </main>
      <Footer />
    </>
  );
}
