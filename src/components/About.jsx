import React from "react";
import ResumeButton from "./ResumeButton.jsx";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Hi, I’m <span className="text-green-400">Madhav Deshpande</span>, a passionate MERN Stack Developer
          with a love for building responsive, user-friendly web applications.
          I enjoy turning ideas into reality through clean and efficient code.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <a
            href="mailto:madhavdeshpande2109@gmail.com"
            className="inline-block bg-green-400 text-black px-5 py-2 rounded font-medium hover:bg-green-500 transition duration-300"
          >
            Hire Me
          </a>
          <ResumeButton />
        </div>
      </div>
    </section>
  );
}
