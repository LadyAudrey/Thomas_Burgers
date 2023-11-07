"use client";
import styles from "./MobileHeader.module.css";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export function MobileHeader() {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen(!navOpen);
  }
  return (
    <header className="flex justify-between items-center h-16 sm:hidden bg-orange">
      <div className="flex items-center gap-2 ps-2">
        <Image
          src={"/images/chillNoBG.png"}
          height={50}
          width={50}
          alt="hamburger"
          className="h-auto"
        />
        <h1 className="text-2xl">Thomas Burger</h1>
      </div>
      <div onClick={toggleNav}>
        {navOpen ? (
          <div className="flex flex-col items-end mx-2 font-extrabold">
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        ) : (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16" y1="6" x2="0" y2="6" />
            <line x1="16" y1="12" x2="0" y2="12" />
            <line x1="16" y1="18" x2="0" y2="18" />
          </svg>
        )}
        <nav
          className={`absolute flex flex-col gap-2 bg-orange top-16 right-0 ${
            styles.dropdownMenu
          } motion-reduce:transition-none overflow-hidden ${
            navOpen ? "h-32 p-3" : "h-0 p-0"
          }`}
        >
          <Link href="#menu">
            {" "}
            <button className="underline">Menu</button>
          </Link>
          <Link href="#specials">
            {" "}
            <button className="underline">Specials</button>
          </Link>
          <Link href="#location">
            {" "}
            <button className="underline">Location</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
