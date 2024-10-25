import React from 'react';
import { motion } from 'framer-motion';

interface NumberDisplayProps {
  number: number;
  textColor: string;
}

export function NumberDisplay({ number, textColor }: NumberDisplayProps) {
  return (
    <motion.div
      key="number"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`text-[35vmin] font-bold ${textColor} select-none`}
    >
      {number}
    </motion.div>
  );
}