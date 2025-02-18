import React from 'react'

type NavbarItem = {
    name: string;
    href: string;
}

type NavbarProps = {
    items: NavbarItem[];
}

function Navbar({ items }: NavbarProps) {
  return (
    <nav className="hidden md:block">
    <ul className="space-y-6">
        {items.map((item) => <li key={item.name} className="group cursor-pointer transform hover:translate-x-2 transition-transform duration-200">
        <a className="flex items-center space-x-4" href={item.href}>
          <span className="h-px w-12 bg-gray-400 group-hover:bg-teal-300 group-hover:w-16 transition-all duration-200"></span>
          <span className="text-sm tracking-widest group-hover:text-teal-300">{item.name}</span>
        </a>
      </li>)}
    </ul>
  </nav>
  )
}

export default Navbar