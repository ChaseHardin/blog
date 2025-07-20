import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock scroll and focus trap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      menuRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Hamburger icon morph
  const HamburgerIcon = ({ open }: { open: boolean }) => (
    <svg
      className="w-6 h-6 text-blue-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        className={`transition-transform duration-400 ease-in-out ${
          open ? "rotate-45 translate-y-1.5" : ""
        }`}
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      />
      <line
        className={`transition-opacity duration-400 ease-in-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
        x1="3"
        y1="12"
        x2="21"
        y2="12"
      />
      <line
        className={`transition-transform duration-400 ease-in-out ${
          open ? "-rotate-45 -translate-y-1.5" : ""
        }`}
        x1="3"
        y1="18"
        x2="21"
        y2="18"
      />
    </svg>
  );

  return (
    <nav className="relative bg-zinc-900 p-4 rounded-b-2xl shadow-lg">
      <div className="container max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo + Profile */}
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
          />
          <span className="text-white font-extrabold text-xl tracking-wide">
            Chase Hardin
          </span>
        </Link>

        {/* Hamburger toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <HamburgerIcon open={isOpen} />
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:items-center md:gap-6">
          {menuItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="text-zinc-300 hover:text-blue-400 font-semibold px-3 py-2 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-out mobile menu */}
      <aside
        id="mobile-menu"
        tabIndex={-1}
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-zinc-900 shadow-xl rounded-l-2xl p-6
          transform transition-transform duration-400 ease-in-out
          ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }
          flex flex-col
        `}
        aria-hidden={!isOpen}
      >
        {/* Header: Profile + Name + Close button */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-x-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover"
            />
            <span className="text-white font-extrabold text-lg tracking-wide">
              Chase Hardin
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <ul className="flex flex-col space-y-8">
          {menuItems.map(({ label, to }, idx) => (
            <li
              key={to}
              style={{ transitionDelay: `${idx * 150 + 300}ms` }}
              className={`transform transition-all duration-400 ease-in-out
                ${isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
              `}
            >
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-blue-400 font-semibold text-lg tracking-wide transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay background */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
};
