"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'; 
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';

export default function Minijuego() {
  const [player1Clicks, setPlayer1Clicks] = useState(0);
  const [player2Clicks, setPlayer2Clicks] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5); 
  const [player1, setPlayer1] = useState("Goku");
  const [player2, setPlayer2] = useState("Vegeta");

  const handleSelectPlayer1 = (e) => setPlayer1(e.target.value);
  const handleSelectPlayer2 = (e) => setPlayer2(e.target.value);

  const startGame = () => {
    setPlayer1Clicks(0);
    setPlayer2Clicks(0);
    setGameStarted(true);
    setGameOver(false);
    setTimeLeft(5); 

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          endGame();
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    setGameStarted(false);
    setGameOver(true);
    
    setTimeout(() => {
      if (player1Clicks > player2Clicks) {
        setWinner("Jugador 1");
      } else if (player2Clicks > player1Clicks) {
        setWinner("Jugador 2");
      } else {
        setWinner("Empate");
      }
    },);
  };

  const handleKeyDown = (e) => {
    if (!gameStarted || gameOver) return; 

    if (e.key === "a" || e.key === "A") {
      setPlayer1Clicks((prevClicks) => prevClicks + 1);
    } else if (e.key === "l" || e.key === "L") {
      setPlayer2Clicks((prevClicks) => prevClicks + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header /> 

      <Link href="/" className="absolute top-4 left-4 bg-orange-700 text-white py-2 px-4 rounded-lg shadow-2xl">
        Volver
      </Link>

      <div className="flex flex-col items-center justify-center flex-grow relative inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/torneo.png')",
        }}>
        {!gameStarted && (
          <div className="flex flex-col items-center space-y-4 my-4">
            <div className="text-2xl md:text-4xl font-bold py-4 text-center">
              ¡Bienvenido a la batalla de poder!
            </div>
            <div className="text-xs md:text-sm py-4 font-bold text-center">
              El jugador 1 presiona la tecla (A) y el jugador 2 la tecla (L). ¡Solo tienen 5 segundos!
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center">
                <label className="mr-2">Selecciona Personaje 1:</label>
                <select value={player1} onChange={handleSelectPlayer1} className="mt-2 text-black">
                  <option value="Goku">Goku</option>
                  <option value="Vegeta">Vegeta</option>
                  <option value="Piccolo">Piccolo</option>
                  <option value="Bulma">Bulma</option>
                  <option value="Freezer">Freezer</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="mr-2">Selecciona Personaje 2:</label>
                <select value={player2} onChange={handleSelectPlayer2} className="mt-2 text-black">
                  <option value="Goku">Goku</option>
                  <option value="Vegeta">Vegeta</option>
                  <option value="Piccolo">Piccolo</option>
                  <option value="Bulma">Bulma</option>
                  <option value="Freezer">Freezer</option>
                </select>
              </div>
            </div>

            <button
              onClick={startGame}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
            >
              Iniciar Juego
            </button>
          </div>
        )}

        {gameStarted && (
          <div className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/fight_namek.jpeg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 flex flex-col items-center mt-6 space-y-4">
              <h2 className="text-2xl mb-4">¡Entreguen todo su ki!</h2>
              <p>Jugador 1 (A) vs Jugador 2 (L)</p>
              <p className="mt-2">Tiempo restante: {timeLeft} segundos</p>

              <div className="flex justify-between w-11/12 max-w-lg">
                <p>Clicks Jugador 1: {player1Clicks}</p>
                <p>Clicks Jugador 2: {player2Clicks}</p>
              </div>

              <div className="mt-6">
                <Image src="/power_fight.gif" alt="Power Fight" width={300} height={180} className="max-w-full" />
              </div>
            </div>
          </div>
        )}

        {gameOver && (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">
              {winner === "Empate" ? "¡Es un empate!" : `¡${winner} gana!`}
            </h2>
            <div className="flex justify-center w-full">
              {winner === "Empate" ? (
                <>
                  <Image
                    src={`/${player1.toLowerCase()}.png`}
                    alt={player1}
                    width={150}
                    height={150}
                    className="mr-4"
                  />
                  <Image
                    src={`/${player2.toLowerCase()}.png`}
                    alt={player2}
                    width={150}
                    height={150}
                    className="ml-4"
                  />
                </>
              ) : (
                <>
                  {winner === "Jugador 1" && (
                    <Image
                      src={`/${player1.toLowerCase()}.png`}
                      alt={player1}
                      width={150}
                      height={150}
                      className="mr-4"
                    />
                  )}
                  {winner === "Jugador 2" && (
                    <Image
                      src={`/${player2.toLowerCase()}.png`}
                      alt={player2}
                      width={150}
                      height={150}
                      className="ml-4"
                    />
                  )}
                </>
              )}
            </div>
            <button
              onClick={startGame}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600"
            >
              Jugar de nuevo
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
