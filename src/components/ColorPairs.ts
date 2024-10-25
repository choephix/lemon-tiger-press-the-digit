export const colorPairs = [
  ['bg-pink-400', 'text-yellow-300'],
  ['bg-purple-500', 'text-green-300'],
  ['bg-blue-500', 'text-orange-300'],
  ['bg-green-500', 'text-pink-300'],
  ['bg-yellow-400', 'text-purple-400'],
  ['bg-orange-400', 'text-blue-300'],
] as const;

export type ColorPair = typeof colorPairs[number];