import React from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Male", path: "/male" },
    { name: "Female", path: "/female" },
    { name: "Kids", path: "/kids" },
    // { name: "Reviews", path: "/reviews" },
    // { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-sky-100/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-8">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide cursor-pointer hover:scale-105 transition-transform">
          dobhivala
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-800 font-medium">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-sky-600" : "hover:text-sky-600"
                  }`
                }
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full`}
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Icon (Desktop) */}
        <div className="hidden lg:flex">
          <Button
            size="icon"
            className="bg-sky-600 hover:bg-sky-700 rounded-full shadow-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Sidebar for Mobile / Tablet */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sky-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-sky-50/95 border-r border-sky-200 backdrop-blur-md rounded-r-2xl shadow-lg p-6 animate-slide-in"
            >
              <SheetHeader className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-sky-600">dobhivala</h2>
              </SheetHeader>

              {/* Links */}
              <ul className="flex flex-col space-y-4 text-gray-800 font-medium mt-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md transition-all ${
                          isActive
                            ? "bg-sky-100 text-sky-600"
                            : "hover:bg-sky-100 hover:text-sky-600"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Add to Cart Button */}
              <div className="mt-8">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 rounded-full shadow-md flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-white" />
                  <span>Add to Cart</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
