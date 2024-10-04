"use client";

import { useState } from "react";
import Link from "next/link";
import Header from '../components/header'; // Importar el componente Header

export default function Home() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`¡Hola, ${name}! Bienvenido a la página de Dragon Ball.`);
    setName("");
  };

  const characters = [
    { id: "01", name: "Goku" },
    { id: "02", name: "Vegeta" },
    { id: "03", name: "Piccolo" },
    { id: "04", name: "Bulma" },
    { id: "05", name: "Freezer" },
  ];

  return (
    <>
      <Header /> {/* Usar el componente Header */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h2 className="text-4xl font-bold mb-4 text-white">Página Básica</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border text-black border-black rounded-lg p-2 mb-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Saludar
          </button>
        </form>

        {greeting && (
          <p className="text-lg text-blue-600">{greeting}</p>
        )}

        <div className="mt-8 w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character) => (
                <tr
                  key={character.id}
                  className="hover:bg-blue-600 text-white transition duration-200"
                >
                  <td className="py-2 px-4">{character.id}</td>
                  <td className="py-2 px-4">
                    <Link
                      href={`/personajes?nombre=${character.name.toLowerCase()}`} // Enlace a la página de personajes
                    >
                      {character.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
