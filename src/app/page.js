"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(""); // Estado para almacenar el nombre
  const [greeting, setGreeting] = useState(""); // Estado para almacenar el saludo

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    setGreeting(`¡Hola, ${name}! Bienvenido a mi página.`); // Actualizar el saludo
    setName(""); // Limpiar el campo de entrada
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-4">Página Básica</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)} // Actualiza el estado con el valor del input
          className="border text-black border-black rounded-lg p-2 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
        >
          Saludar
        </button>
      </form>
      {greeting && ( // Solo muestra el saludo si hay uno
        <p className="text-lg text-blue-600">{greeting}</p>
      )}
    </div>
  );
}
