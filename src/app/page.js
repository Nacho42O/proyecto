// src/app/page.js
"use client";

import Header from '../components/Header';
import Greeting from '../components/Greeting';
import CharacterList from '../components/CharacterList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between"> {/* Flex container to push footer down */}
      <div>
        <Header />
        <Greeting />
        <CharacterList />
      </div>
      <Footer />
    </div>
  );
}
