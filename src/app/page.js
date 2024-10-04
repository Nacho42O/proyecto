"use client";

import Header from '../components/header';
import Greeting from '../components/Greeting';
import CharacterList from '../components/CharacterList';
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <>
      <Header />
      <Greeting />
      <CharacterList />
      <Footer />
    </>
  );
}
