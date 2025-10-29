import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const Header = ({ totalItems, subtotal }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Male", path: "/male" },
    { name: "Female", path: "/female" },
    { name: "Kids", path: "/kids" },
  ];

  // ✅ Auto close menu when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-sky-100/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-8">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-sky-400 tracking-wide cursor-pointer hover:scale-105 transition-transform">
          dobhi<span className="text-sky-950">W</span>ala
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-800 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-sky-600" : "hover:text-sky-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Icon Desktop */}
        {/* <div className="hidden lg:flex">
          <Button
            size="icon"
            className="bg-sky-600 hover:bg-sky-700 rounded-full shadow-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </Button>
        </div> */}
         <div className="flex items-center gap-3">
                    <div className="relative">
                      <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white" size="icon">
                        <ShoppingCart className="w-4 h-4" />
                        
                      </Button>
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
                          {totalItems}
                          
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-sky-800 dark:text-sky-200">₹{subtotal}</div>
                      <div className="text-xs text-sky-600 dark:text-sky-300">Estimated</div>
                    </div>
                  </div>

        {/* Sidebar Mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sky-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-sky-50/95 border-l border-sky-200 backdrop-blur-md rounded-l-2xl p-6"
            >
              <SheetHeader className="text-xl font-bold text-sky-600">
                dobhivala
              </SheetHeader>

              <ul className="flex flex-col space-y-4 text-gray-800 font-medium mt-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
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

              <div className="mt-6">
                <Button className="w-full rounded-full bg-sky-600 hover:bg-sky-700 gap-2">
                  <ShoppingCart className="w-5 h-5 text-white" />
                  Add to Cart
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
