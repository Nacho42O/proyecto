// src/components/Header.js

export default function Header() {
    return (
      <header className="w-full bg-orange-500 p-2 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Dragon Ball Logo"
          className="h-16 mr-2"
        />
        <h1 className="text-white text-2xl font-bold">Dragon Ball Pokedex</h1>
      </header>
    );
  }
  
 
  