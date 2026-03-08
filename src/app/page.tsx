"use client"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../sections/Menu";
import Bestsellers from "../sections/Bestsellers";
import OurPromise from "../sections/OurPromise";
import Footer from "../sections/Footer";

export default function Home() {

  const [role,setRole] = useState("");

  useEffect(()=>{
    const userRole = localStorage.getItem("role");
    setRole(userRole || "");
  },[])
  return (
    <main className="min-h-screen bg-(--color-camel-100) scroll-smooth">
      <Header></Header>
      {role === "ADMIN" && (
        <button>Adicionar Produto</button>
      )}
            {role === "EMPLOYEE" && (
        <button>Ver Pedidos</button>
      )}
            {role === "CLIENT" && (
        <button>Comprar</button>
      )}
      <Hero></Hero>
      <Bestsellers></Bestsellers>
      <OurPromise></OurPromise>
      <Footer></Footer>
    </main>
  );
}