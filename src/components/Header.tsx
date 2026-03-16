"use client";
import { useEffect, useState } from "react";
import { greatVibes } from "../app/layout";
import LogoutButton from "./Logout";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useCart } from "./CartContext";

export default function Header() {
  const [role, setRole] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole || "");
  }, []);

  const { cart } = useCart();
  const totalItems = cart.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-(--color-camel-100) text-(--color-amber-700) w-full top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="px-6 md:px-20 py-4 flex justify-between items-center">
        <Link href="/">
          <h1
            className={`${greatVibes.className} text-4xl md:text-6xl text-center hover:text-(--color-camel-600)`}
          >
            Le Bouledogue
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
          <div className="relative">
            <Link href="/cart">
              <FaShoppingCart size={24} />
            </Link>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <span>
              {!role && <Link href="/login">Login/Signup</Link>}
            </span>
            <span>
              {(role === "ADMIN" || role === "EMPLOYEE") && (
                <LogoutButton></LogoutButton>
              )}
            </span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-(--color-amber-700) hover:text-(--color-camel-600)"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-(--color-camel-100) px-6 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <Link href="/cart">
                <FaShoppingCart size={24} />
              </Link>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <span>
                {!role && <Link href="/login">Login/Signup</Link>}
              </span>
              <span>
                {(role === "ADMIN" || role === "EMPLOYEE") && (
                  <LogoutButton></LogoutButton>
                )}
              </span>
            </div>
          </div>
          <SearchBar />
        </div>
      )}

      <hr className="opacity-20"></hr>

      {/* Menu */}
      <div className="hidden md:flex bg-var(--color-lebron-600) px-20 py-3 justify-between text-sm font-medium">
        <span className="hover:underline cursor-pointer">Cakes</span>
        <span className="hover:underline cursor-pointer">Theme Cakes</span>
        <span className="hover:underline cursor-pointer">Desserts</span>
        <span className="hover:underline cursor-pointer">Birthday</span>
        <span className="hover:underline cursor-pointer">Hampers</span>
        <span className="hover:underline cursor-pointer">Anniversary</span>
        <span className="hover:underline cursor-pointer">Occasions</span>
        <button className="bg-white text-var(--color-lebron-600) px-4 py-1 rounded-full font-semibold hover:scale-105 transition">
          ORDER NOW
        </button>
      </div>
    </header>
  );
}