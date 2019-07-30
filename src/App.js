import React, { useState } from 'react';
import './App.css';

function App(props) {
  const { name } = props;
  // Entrada, rodando, fim
  const [stage, setStage] = useState('Entrada');

  // palpites que a máquina deu
  const [guess, setGuess] = useState(150);
  const [guessNumber, setGuessNumber] = useState(1);

  // 0 <> 300
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const startGame = () => {
    setStage('Rodando');
    setMin(0);
    setMax(300);
    setGuess(150);
    setGuessNumber(1);
  };

  if (stage === 'Entrada') return <button onClick={startGame}>Start!!</button>;

  const lessThan = () => {
    if (guess !== 0) setGuessNumber(guessNumber + 1);
    setMax(guess);
    const nextGuess = parseInt((guess - min) / 2) + min;
    setGuess(nextGuess);
  };

  const greaterThan = () => {
    if (guess !== 0 && stage !== 'Finish!') setGuessNumber(guessNumber + 1);
    setMin(guess);
    const nextGuess = parseInt((max - guess) / 2) + guess;
    setGuess(nextGuess);
  };

  const found = () => {
    setStage('Fim!');
  };

  if (stage === 'Fim!') {
    return <>
      <p>Acertou no número {guess} com {guessNumber} chutes!</p>
      <button onClick={startGame}>Iniciar novamente</button>
    </>;
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>O seu palpite é {guess}?</h2>
      <span>Min: {min} | Max: {max}</span>
      <h2>Número de palpites: {guessNumber}?</h2>
      <button onClick={lessThan}>Menor!</button>
      <button onClick={found}>Acertou!</button>
      <button onClick={greaterThan}>Maior!</button>
    </div>
  );
}

export default App;
