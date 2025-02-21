import React from 'react'

type NavbarItem = {
    name: string;
    href: string;
}

type NavbarProps = {
    items: NavbarItem[];
    link: string;
}

function Navbar({ items, link }: NavbarProps) {
  return (
    <nav className="hidden md:block">
    <ul className="space-y-6 mb-12">
        {items.map((item) => <li key={item.name} className="group cursor-pointer transform hover:translate-x-2 transition-transform duration-200">
        <a className="flex items-center space-x-4" href={item.href}>
          <span className="h-px w-12 bg-gray-400 group-hover:bg-teal-300 group-hover:w-16 transition-all duration-200"></span>
          <span className="text-sm tracking-widest group-hover:text-teal-300">{item.name}</span>
        </a>
      </li>)}
    </ul>
    <a download href={link} className="text-white bg-gradient-to-br from-teal-400 pointer will-change-transform transition-transform duration-200 to-slate-600 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Full Resume</a>
  </nav>
  )
}

export default Navbar