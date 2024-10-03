"use client";

import { useState } from "react";
import Header from "../componentes/header"; // Importa el componente Header
import DragonDex from "../componentes/dex"; // Importa el componente DragonDex

export default function Home() {
  // Estado para almacenar el nombre ingresado por el usuario
  const [name, setName] = useState(""); 
  // Estado para almacenar el saludo a mostrar
  const [greeting, setGreeting] = useState(""); 

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    // Actualizar el saludo con el nombre ingresado
    setGreeting(`¡Hola, ${name}! Bienvenido a la página de Dragon Ball.`);
    setName(""); // Limpiar el campo de entrada
  };

  return (
    <>
      <Header /> {/* Usa el componente Header */}

      {/* Contenedor principal con contenido centrado */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        {/* Título de la página básica */}
        <h2 className="text-4xl font-bold mb-4 text-white">Página Básica</h2>

        {/* Formulario para ingresar el nombre */}
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name} // Valor del campo de entrada
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

        {/* Mostrar saludo si hay uno */}
        {greeting && (
          <p className="text-lg text-blue-600">{greeting}</p>
        )}

        <DragonDex /> {/* Usa el componente DragonDex */}
      </div>
    </>
  );
}
