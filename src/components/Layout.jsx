import { NavLink, Outlet } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/profile.js";

export default function Layout() {
  return (
    <>
      <button
        type="button"
        className="skip-link"
        onClick={() => {
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </button>
      <header className="site-header">
        <p className="brand">
          {profile.name} <span className="brand-sub">| Developer</span>
        </p>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Outside <Outlet /> so it stays mounted across every route. */}
        <ThemeToggle />
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer>
        © 2026 {profile.name}. Built with React, Vite and React Router for CSCI 4360.
      </footer>
    </>
  );
}
