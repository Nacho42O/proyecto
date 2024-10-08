// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-0">
      <div className="py-1 container mx-auto text-center">
        <p>© {new Date().getFullYear()} Dragon Ball DragonDex. All rights reserved.</p>
        <p>
          Built with 💙 by Nacho y Cris
        </p>
        <p>
          <a href="https://github.com/Nacho42O/proyecto" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub Repo
          </a>
        </p>
      </div>
    </footer>
  );
}
