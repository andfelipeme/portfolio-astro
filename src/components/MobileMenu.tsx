import { useState } from "react";
import {
  FaBlogger,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-slate-300 hover:text-white transition-colors duration-200"
      >
        {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          className="absolute top-16 left-0 right-0 w-full rounded-2xl border border-white/10 px-7 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(15, 23, 42, 0.97)",
            backdropFilter: "blur(12px)",
          }}
        >
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="flex gap-2 items-center text-lg text-slate-300 hover:text-white transition-colors duration-200"
          >
            <FaHome className="text-xl" /> Home
          </a>
          <a
            href="/projects"
            onClick={() => setOpen(false)}
            className="flex gap-2 items-center text-lg text-slate-300 hover:text-white transition-colors duration-200"
          >
            <GrProjects className="text-xl" /> Projects
          </a>
          <a
            href="/blog"
            onClick={() => setOpen(false)}
            className="flex gap-2 items-center text-lg text-slate-300 hover:text-white transition-colors duration-200"
          >
            <FaBlogger className="text-xl" /> Blog
          </a>
          <div className="flex items-center justify-around py-3">
            <a
              href="https://github.com/andfelipeme"
              target="_blank"
              className="flex items-center gap-2 text-lg text-slate-300 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/andfelipeme-fullstack/"
              target="_blank"
              className="flex items-center gap-2 text-lg text-slate-300 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/andmendezfor/"
              target="_blank"
              className="flex items-center gap-2 text-lg text-slate-300 hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
