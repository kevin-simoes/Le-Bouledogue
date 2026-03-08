"use client"
import { useEffect, useState } from "react";
import { greatVibes } from "../app/layout";
import LogoutButton from "./Logout";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Header(){
  const [role,setRole] = useState("");
  
    useEffect(()=>{
      const userRole = localStorage.getItem("role");
      setRole(userRole || "");
    },[])
return (
<header className="bg-(--color-camel-100) text-(--color-camel-700) w-full top-0 z-50 shadow-md">
        
{/* Top Bar */}
<div className="px-20 py-4 flex justify-between items-center">
<h1 className={`${greatVibes.className} text-6xl text-center`}>
    Le Bouledogue
  </h1>

  <div className="flex items-center gap-4">
    <SearchBar />
    <FaShoppingCart />
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
      <span>
        {!role && (
          <Link href="/login">Login/Signup</Link>
        )}
        </span>
        <span>
        {(role === "ADMIN" || role === "EMPLOYEE") && <LogoutButton></LogoutButton>
      }
        </span>
    </div>
  </div>
</div>

<hr className="opacity-20"></hr>

{/* Menu */}
<div className="bg-var(--color-lebron-600) px-20 py-3 flex justify-between text-sm font-medium">
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
</header>);
}