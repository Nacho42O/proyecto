import Link from 'next/link';

export default function MiniGameButton() {
  return (
    <div className="flex justify-center mt-8">
      <Link href="/minijuego">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Minijuego
        </button>
      </Link>
    </div>
  );
}
