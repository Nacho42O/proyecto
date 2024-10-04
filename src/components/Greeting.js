import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`¡Hola, ${name}! Bienvenido a la página de Dragon Ball.`);
    setName("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black p-4"> {/* Removed min-h-screen */}
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
      {greeting && <p className="text-lg text-blue-600">{greeting}</p>}
    </div>
  );
}
