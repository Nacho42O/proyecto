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
  );
}
