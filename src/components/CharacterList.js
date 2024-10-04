import Link from "next/link";

export default function CharacterList() {
  const characters = [
    { id: "01", name: "Goku" },
    { id: "02", name: "Vegeta" },
    { id: "03", name: "Piccolo" },
    { id: "04", name: "Bulma" },
    { id: "05", name: "Freezer" },
  ];

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto bg-black p-4 shadow-lg">
      <table className="min-w-full bg-gray-800 rounded-lg"> {/* Solo redondeo superior */}
        <thead>
          <tr className="bg-orange-500 text-white rounded-tl-lg"> {/* Fondo naranja y redondeo superior */}
            <th className="py-2 px-4 text-left rounded-tl-lg">ID</th> {/* Redondeo de la esquina superior izquierda */}
            <th className="py-2 px-4 text-left rounded-tr-lg">Nombre</th> {/* Redondeo de la esquina superior derecha */}
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
  );
}
