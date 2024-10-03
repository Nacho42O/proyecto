"use client"; // Asegúrate de que este archivo sea un componente del lado del cliente

import { useSearchParams } from 'next/navigation';

export default function Personaje() {
  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre'); // Obtener el nombre del personaje de la URL

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold text-white">{`Hola ${nombre}`}</h1>
    </div>
  );
}
