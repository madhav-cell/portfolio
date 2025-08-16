import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">© {new Date().getFullYear()} Madhav Deshpande</span>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/madhav-deshpande-5ab036259/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/madhav-cell" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}
