/**
 *
 * Crea una función a la que se le pase como argumento un array de números
 * y retorne el mayor.
 *
 * EJEMPLO: Si llamamos a getGreatestNum([4, 10, 6, 16, 1]), debe retornar 16
 */

"use strict";

const getGreatestNum = (numeros) => {
  let biggestNum = -Infinity;

  for (const numero of numeros) {
    if (numero > biggestNum) {
      biggestNum = numero;
    }
  }

  return biggestNum;
};

console.log(getGreatestNum([4, 10, 6, 16, 1]));
console.log(getGreatestNum([4, 20, 6, 16, 1]));
console.log(getGreatestNum([4, 10, 6, 16, 38]));
