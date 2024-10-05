"use client"; // Asegúrate de que este archivo sea un componente del lado del cliente

import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header'; // Importamos Header
import Footer from '../../components/Footer'; // Importamos Footer

export default function Personaje() {
  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre'); // Obtener el nombre del personaje de la URL

  // Información de prueba
  const personajeInfo = {
    nombre: 'Goku',
    raza: 'Saiyajin',
    sexo: 'Masculino',
    ki: 60000000, // Ki base
    planetaNatal: 'Tierra', // Información adicional si fuera necesaria
  };

  // Cambiar el nombre a minúsculas para que coincida con el nombre del archivo
  const imageName = `${nombre.toLowerCase()}.png`;
  const backgroundPlanet = 'tierra.png'; // Fondo de ejemplo para Goku

  return (
    <div className="min-h-screen flex flex-col justify-between text-white" style={{ backgroundImage: `url(/${backgroundPlanet})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header /> {/* Insertamos el Header */}

      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-black bg-opacity-60"> {/* Fondo negro semi-transparente */}
        <div className="bg-opacity-90 bg-black p-6 rounded-lg shadow-lg w-full max-w-4xl"> {/* Contenedor principal */}
          {/* Contenedor de la imagen y la tabla */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenedor de la imagen */}
            <div className="flex justify-center mb-6 md:mb-0 md:w-1/3">
              <img
                src={`/${imageName}`} // Ruta de la imagen
                alt={nombre}
                className="rounded-lg shadow-lg w-2/3 md:w-full h-auto" // Ajustes de la imagen
              />
            </div>
            
            {/* Contenedor de la tabla de información */}
            <div className="md:w-2/3 md:ml-8">
              <h2 className="text-4xl font-bold text-center md:text-left mb-6">{personajeInfo.nombre}</h2>
              <table className="table-auto w-full border-separate border-spacing-2 text-lg">
                <tbody>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Raza</td>
                    <td className="border-b-2 border-orange-500">{personajeInfo.raza}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Sexo</td>
                    <td className="border-b-2 border-orange-500">{personajeInfo.sexo}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Ki Base</td>
                    <td className="border-b-2 border-orange-500">{personajeInfo.ki.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Planeta Natal</td>
                    <td className="border-b-2 border-orange-500">{personajeInfo.planetaNatal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer /> {/* Insertamos el Footer */}
    </div>
  );
}
