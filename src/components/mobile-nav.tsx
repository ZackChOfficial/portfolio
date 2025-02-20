"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarItem = {
  name: string;
  href: string;
};

type MobileNavProps = {
  items: NavbarItem[];
};

const MobileNav = ({ items }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <ul className="py-4">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-400 hover:text-teal-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;