import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Item = ({ to, icon, label }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 cursor-pointer"
  >
    {icon}<span className="hidden sm:inline">{label}</span>
  </Link>
);

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-semibold">Madhav Deshpande</div>
        <div className="flex gap-2">
          <Item to="home" icon={<FaHome />} label="Home" />
          <Item to="about" icon={<FaUser />} label="About" />
          <Item to="projects" icon={<FaProjectDiagram />} label="Projects" />
          <Item to="contact" icon={<FaEnvelope />} label="Contact" />
        </div>
      </nav>
    </header>
  );
}
