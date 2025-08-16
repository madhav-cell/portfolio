import React from "react";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
