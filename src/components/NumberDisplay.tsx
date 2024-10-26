import React from 'react';
import { motion } from 'framer-motion';

interface NumberDisplayProps {
  number: string;
  textColor: string;
}

export function NumberDisplay({ number, textColor }: NumberDisplayProps) {
  const borderColor = textColor.replace('text', 'border');
  return (
    <motion.div
      key="number"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`text-[35vmin] font-bold ${textColor} 
      drop-shadow-[0_0_12px_rgba(0,0,0,0.2)] select-none px-[.5em] py-0
      __border __border-8 border-amber-500 ${borderColor} rounded-3xl`}
    >
      {number}
    </motion.div>
  );
}