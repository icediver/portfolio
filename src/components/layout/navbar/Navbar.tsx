"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import NavLink from "./nav-link/NavLink";
import MenuOverlay from "./menu-overlay/MenuOverlay";
import { Logo } from "./logo/Logo";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-main bg-opacity-100 glass-morphism">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-slate-200 font-semibold"
        >
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          {children}
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink path={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mobile-menu block md:hidden text-logo">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-logo text-logo hover:text-purple-400 hover:border-purple-400"
          >
            {!navbarOpen ? (
              <HiBars3 className="h-5 w-5" />
            ) : (
              <HiXMark className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
      ) : null}
    </nav>
  );
};

export default Navbar;
