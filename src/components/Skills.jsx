import React from "react";

const skills = [
  "HTML & CSS", "JavaScript", "React.js", "Node.js",
  "MongoDB", "SQL", "Git/GitHub", "LLM Integration",
  "Teamwork", "Problem Solving"
];

export default function Skills() {
  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold mb-3">Skills</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {skills.map(s => (
          <li key={s} className="bg-white/5 border border-white/10 rounded px-3 py-2 text-center hover:bg-white/10">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
