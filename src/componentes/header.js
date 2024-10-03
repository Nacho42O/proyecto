export default function Header() {
    return (
      <header className="w-full bg-orange-500 p-4 flex items-center justify-center">
        {/* Logo a la izquierda */}
        <img
          src="/logo.png" // Ruta del logo
          alt="Dragon Ball Logo"
          className="h-20 mr-4" // Ajusta el tamaño del logo
        />
        {/* Título centrado */}
        <h1 className="text-white text-3xl font-bold">Dragon Ball Pokedex</h1>
      </header>
    );
  }
  