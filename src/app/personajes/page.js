"use client"; // Asegúrate de que este archivo sea un componente del lado del cliente

import { useSearchParams } from 'next/navigation';
import Link from 'next/link'; // Importamos Link para navegación
import Header from '../../components/Header'; // Importamos Header
import Footer from '../../components/Footer'; // Importamos Footer

export default function Personaje() {
  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre'); // Obtener el nombre del personaje de la URL

  // Información de los personajes con fondos específicos
  const personajesInfo = {
    goku: {
      nombre: 'Goku',
      raza: 'Saiyajin',
      sexo: 'Masculino',
      ki: 60000000, // Ki base
      planetaNatal: 'Tierra',
      backgroundPlanet: 'tierra.png' // Fondo específico para Goku
    },
    vegeta: {
      nombre: 'Vegeta',
      raza: 'Saiyajin',
      sexo: 'Masculino',
      ki: 54000000,
      planetaNatal: 'Planeta Vegeta',
      backgroundPlanet: 'planeta_vegeta.png' // Fondo específico para Vegeta
    },
    piccolo: {
      nombre: 'Piccolo',
      raza: 'Namekiano',
      sexo: 'Masculino',
      ki: 2000000,
      planetaNatal: 'Namek',
      backgroundPlanet: 'namek.png' // Fondo específico para Piccolo
    },
    bulma: {
      nombre: 'Bulma',
      raza: 'Humana',
      sexo: 'Femenino',
      ki: 0,
      planetaNatal: 'Tierra',
      backgroundPlanet: 'tierra.png' // Fondo específico para Bulma
    },
    freezer: {
      nombre: 'Freezer',
      raza: 'Frieza',
      sexo: 'Masculino',
      ki: 530000,
      planetaNatal: 'Planeta Frieza',
      backgroundPlanet: 'nave-freezer.jpg' // Fondo específico para Freezer
    },
  };

  // Cambiar el nombre a minúsculas para que coincida con el objeto
  const personaje = personajesInfo[nombre.toLowerCase()]; // Obtener la información del personaje

  if (!personaje) {
    return <div>Personaje no encontrado</div>; // Manejo de errores si el personaje no existe
  }

  // Nombre de la imagen del personaje
  const imageName = `${nombre.toLowerCase()}.png`;

  return (
    <div className="min-h-screen flex flex-col justify-between text-white" style={{ backgroundImage: `url(/${personaje.backgroundPlanet})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header /> {/* Insertamos el Header */}

      {/* Botón de retorno */}
      <Link href="/" className="absolute top-4 left-4 bg-orange-700 text-white py-2 px-4 rounded-lg shadow-">
        Volver
      </Link>

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
              <h2 className="text-4xl font-bold text-center md:text-left mb-6">{personaje.nombre}</h2>
              <table className="table-auto w-full border-separate border-spacing-2 text-lg">
                <tbody>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Raza</td>
                    <td className="border-b-2 border-orange-500">{personaje.raza}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Sexo</td>
                    <td className="border-b-2 border-orange-500">{personaje.sexo}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Ki Base</td>
                    <td className="border-b-2 border-orange-500">{personaje.ki.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold border-b-2 border-orange-500">Planeta Natal</td>
                    <td className="border-b-2 border-orange-500">{personaje.planetaNatal}</td>
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
