import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 px-8 py-4 flex justify-end z-50">
      <ul className="flex gap-10">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
