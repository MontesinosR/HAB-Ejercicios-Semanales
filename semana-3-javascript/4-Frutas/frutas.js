/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado un array de frutas, genera un nuevo objeto en el que cada fruta pase a ser una
 * nueva propiedad del objeto. El valor asignado a esta propiedad debe ser el nº de veces
 * que la fruta se repite en el array.
 *
 *      const fruitBasket = ['naranja', 'naranja', 'limón', 'pera', 'limón', 'plátano', 'naranja'];
 *
 * Para el array anterior, el objeto resultante debería ser:
 *
 *      const fruits = {
 *          naranja: 3,
 *          limón: 2,
 *          pera: 1,
 *          plátano: 1
 *      };
 */

"use strict";

// Quiero una función "countFruits". Recibirá por parámetro un array de frutas, y nos retornará el objeto con las frutas contadas. Luego, llamar a la función varias veces con arrays de frutas diferentes, y sacar por consola los objetos retornados

const countFruits = (fruits) => {
  const fruitsCount = {};

  for (const fruit of fruits) {
    if (fruit in fruitsCount) {
      fruitsCount[fruit] += 1;
      // fruitsCount[fruit] = fruitsCount[fruit] + 1;
    } else {
      fruitsCount[fruit] = 1;
    }
  }

  return fruitsCount;
};

console.log(countFruits(["manzana", "manzana"]));

const arrayDeFrutas = ["pera", "manzana", "pera"];

const fruitsCount = countFruits(arrayDeFrutas);

console.log(fruitsCount);
