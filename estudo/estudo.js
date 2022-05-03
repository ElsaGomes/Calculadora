console.log("-----SLICE-----");
// retorna todo o arr menos os elementos da posição 0-1 e retira o elemento a partir da posição 4
arr.slice(2, 4);
// para criar uma shallow copy de 1 array
arr.slice();

console.log("\n-----SPLICE-----");
//eliminar elementos de 1 array
// elimina o último elemento
arr.splice(-1);
// o array elimina os 2 elementos que vêm depois do 1º elemento
arr.splice(1, 2);

console.log("\n-----REVERSE-----");
// inverter a ordem dos arrays
const arr2 = ["j", "i", "h", "g", "f"];
// arr2.reverse() = ['f', 'g', 'h', 'i', 'j']

console.log("\n-----CONCAT-----");
// criar um novo array, ao juntar 2 arrays
// arr2 vem depois do arr
arr.concat(arr2) = [...arr, ...arr2];

console.log('\n-----JOIN-----');
// criar uma string com o arr em que os elementos estão separados por ' - '
console.log(letters.join(' - '));

console.log('\n-----forEach LOOP-----');
// no caso do for para os arrays -> [i, value] of movements.entries()
// no caso do forEach -> movements.forEach(function (mov, i, arr) {})

/////////////////////////////////// Arrays -> Challenge 1
// 1. Create a function 'checkDogs', which accepts 2 arrays of dog's ages´
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

// 2. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array
const newDogsJulia = dogsJulia.slice(1, -2);
console.log(newDogsJulia);
console.log(dogsJulia);

// 3.Create an array with both Julia's (corrected) and Kate's data
const dogAges = newDogsJulia.concat(dogsKate);
console.log(dogAges);

// 4.For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶"
const checkDogsEU = function (arr) {
  arr.forEach(function (age, i) {
    age > 3
      ? console.log(`Dog number ${i + 1} is an adult and is ${age} years old.`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};
checkDogsEU(dogAges);