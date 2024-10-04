export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="py-4 container mx-auto text-center">
        <p>© {new Date().getFullYear()} Dragon Ball Fansite. All rights reserved.</p>
        <p>
          Built with 💙 by [Nacho y Cris]
        </p>
        <p>
          <a href="https://github.com/tu-repo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub Repo
          </a>
        </p>
      </div>
    </footer>
  );
}
