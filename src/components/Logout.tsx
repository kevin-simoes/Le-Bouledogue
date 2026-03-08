"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {

  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("role");
    router.push("/login");
  }

  return (
    <button onClick={handleLogout}>
      Sair
    </button>
  );
}