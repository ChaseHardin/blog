import { useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-zinc-900 p-4 rounded-b-2xl shadow-md">
      <div className="container max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo + Profile */}
        <Link className="flex items-center space-x-3 cursor-pointer select-none" to={'/'}>
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
          />
          <span className="text-white font-extrabold text-xl">Chase Hardin</span>
        </Link>

        {/* Hamburger for mobile */}
        {!isOpen && (
          <button
            className="md:hidden text-blue-400 focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        )}

        {/* Desktop Menu (visible from md up) */}
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

      {/* Mobile Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-zinc-900 flex flex-col justify-center items-center space-y-10 z-50 p-4">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-blue-400 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col items-center space-y-10 text-2xl">
            {menuItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-zinc-300 hover:text-blue-400 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
