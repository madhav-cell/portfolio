import React from "react";

const projects = [
  {
    title: "Campus Facility Booking System",
    desc: "MERN app with auth, admin panel, scheduling for labs/classrooms.",
    link: "https://campus-facility-booking.onrender.com/"
  },
  {
    title: "Platform Occupancy Management",
    desc: "HTML/CSS/PHP/MySQL app for occupancy analytics and dashboards.",
    link: "https://hackshri.free.nf"  // 👈 added https://
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-green-400 mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/5 border border-white/10 rounded p-4 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a
              className="text-green-400 hover:underline inline-block mt-3"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
