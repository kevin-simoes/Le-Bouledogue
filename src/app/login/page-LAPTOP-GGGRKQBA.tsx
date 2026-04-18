"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import bakery from "@/public/photos/bakery.avif";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { greatVibes } from "../layout";
import { ReturnArrow } from "@/src/components/BackArrow";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("role", data.role);
      router.push("/");
    } else {
      alert("Email ou senha incorretos");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Seta para voltar */}
      <ReturnArrow>
        
      </ReturnArrow>

      {/* Imagem de fundo */}
      <Image
        src={bakery}
        alt="Bakery background"
        fill
        className="object-cover -z-10 opacity-80"
      />

      {/* Container principal */}
      <div className="w-full max-w-5xl h-auto md:h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LOGIN */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center px-8 md:px-16 gap-4 py-8"
        >
          <h2 className="text-3xl font-bold text-gray-800">Iniciar Sessão</h2>

          {/* Ícones sociais */}
          <div className="flex gap-3 mt-2">
            <Link
              href="https://linkedin.com/in/kevin-simões-362750350"
              target="_blank"
            >
              <div className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <FaLinkedinIn className="h-20" />
              </div>
            </Link>
            <Link href="https://github.com/kevin-simoes" target="_blank">
              <div className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <FaGithub className="h-20" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/_kevao25/?next=%2F"
              target="_blank"
            >
              <div className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <FaInstagram className="h-20" />
              </div>
            </Link>
            <Link href="https://x.com/niveksccp" target="_blank">
              <div className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <FaTwitter className="h-20" />
              </div>
            </Link>
          </div>

          <p className="text-sm text-gray-500">Use seu email e senha</p>

          {/* Campo de email */}
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 p-3 rounded outline-none"
          />

          {/* Campo de senha */}
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 p-3 rounded outline-none"
          />

          <a className="text-sm text-gray-500 hover:underline cursor-pointer">
            Esqueceu sua senha?
          </a>

          <button
            type="submit"
            className="mt-2 bg-(--color-camel-700) text-white px-8 py-3 rounded-md hover:opacity-90 transition"
          >
            INICIAR SESSÃO
          </button>
        </form>

        {/* Painel de boas-vindas */}
        <div className="bg-(--color-camel-700) flex items-center justify-center py-8">
          <div className="text-center text-white px-10">
            <h1 className="text-4xl font-bold mb-4">
              Bem Vindo à <br />
              <p className={`${greatVibes.className} text-6xl text-center`}>
                Le Bouledogue
              </p>
            </h1>

            <p className="text-sm opacity-90 mb-6">
              Faça login para fazer sua primeira compra!
            </p>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-(--color-camel-700) transition">
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}