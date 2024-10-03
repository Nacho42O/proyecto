"use client"; // Asegúrate de que este archivo sea un componente del lado del cliente

import { useSearchParams } from 'next/navigation';

export default function Personaje() {
  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre'); // Obtener el nombre del personaje de la URL

  // Cambiar el nombre a minúsculas para que coincida con el nombre del archivo
  const imageName = `${nombre.toLowerCase()}.png`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold text-white">{`Hola ${nombre}`}</h1>
      <img
        src={`/${imageName}`} // Ruta de la imagen
        alt={nombre}
        className="mt-4 w-1/2 h-auto" // Tamaño de la imagen (ajustar como desees)
      />
    </div>
  );
}
