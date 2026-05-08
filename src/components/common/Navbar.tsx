"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { navLinks } from "@/data/navbarContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* logo */}
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BrightSky Academy
              </span>
            </Link>
          </div>

          {/* nav links for Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/admission">
              <Button
                variant="default"
                className="cursor-pointer rounded-full px-8 h-12 text-sm font-semibold bg-linear-to-r from-pink-500
                    to-pink-400
                    hover:from-pink-600
                    hover:to-pink-500
                    shadow-lg
                    hover:shadow-pink-300/50
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105"
              >
                Enroll Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-gray-700 font-medium hover:text-pink-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/admission" onClick={() => setIsOpen(false)}>
              <div className="px-3 py-2">
                <Button className="w-full cursor-pointer rounded-full bg-pink-500 hover:bg-pink-600 h-11">
                  Enroll Now
                </Button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
