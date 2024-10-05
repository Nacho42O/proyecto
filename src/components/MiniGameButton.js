import Link from 'next/link';

export default function MiniGameButton() {
  return (
    <div className="flex justify-center mt-8">
      <Link href="/minijuego">
        <button className="bg-blue-500 text-white px-4 py-4 mb-4 rounded-lg hover:bg-green-600">
          Minijuego
        </button>
      </Link>
    </div>
  );
}
