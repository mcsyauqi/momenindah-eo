"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Vendor", href: "/vendor" },
  { name: "Konsultasi", href: "/konsultasi" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-[#7C3AED]" />
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] gradient-text">
              MomenIndah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#1E1B4B] hover:text-[#7C3AED] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/konsultasi"
              className="gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1E1B4B]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[#1E1B4B] hover:text-[#7C3AED] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/konsultasi"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center gradient-primary text-white px-6 py-3 rounded-full font-semibold"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
