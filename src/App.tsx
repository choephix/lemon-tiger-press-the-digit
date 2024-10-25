import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SuccessAnimation } from './components/SuccessAnimation';
import { NumberDisplay } from './components/NumberDisplay';
import { colorPairs } from './components/ColorPairs';
import { useNumberGame } from './hooks/useNumberGame';
import { StarField } from './components/StarField';

function App() {
  const {
    currentNumber,
    showSuccess,
    colorIndex,
    handleCorrectGuess
  } = useNumberGame();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showSuccess) return;
      if (parseInt(e.key) === currentNumber) {
        handleCorrectGuess();
        console.log(e.key, currentNumber)
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentNumber, handleCorrectGuess, showSuccess]);

  const [, textColor] = colorPairs[colorIndex];

  return (
    <div className="min-h-screen bg-blue-950 transition-colors duration-700 flex items-center justify-center overflow-hidden relative">
      <StarField />
      <AnimatePresence mode="wait">
        {showSuccess ? (
          <SuccessAnimation />
        ) : (
          <NumberDisplay 
            number={currentNumber} 
            textColor={textColor} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;