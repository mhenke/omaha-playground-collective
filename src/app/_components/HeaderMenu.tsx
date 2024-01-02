"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeaderMenu() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div id="menu_dropdown" className="dropdown" ref={dropdownRef}>
      <label
        tabIndex={0}
        className="btn btn-circle btn-ghost"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li onClick={closeDropdown}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
