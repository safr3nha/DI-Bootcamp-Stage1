import { persons } from './data.js';

function printAverageAge(arr) {
  const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / arr.length;
  console.log("A média de idade é:", average);
}

// Executando a função
printAverageAge(persons);