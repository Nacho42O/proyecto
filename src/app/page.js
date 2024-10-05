"use client";

import Header from '../components/Header';
import Greeting from '../components/Greeting';
import CharacterList from '../components/CharacterList';
import Footer from '../components/Footer';
import MinijuegoButton from '../components/MiniGameButton'; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: "url('/kamehouse.jpg')" }}>
      <div>
        <Header />
        <Greeting />
        <div className="text-center font-bold text-xl text-black"> 
          Aquí puedes obtener información del personaje que quieras:
        </div>
        <CharacterList />
        <MinijuegoButton />
      </div>
      <Footer />
    </div>
  );
}
