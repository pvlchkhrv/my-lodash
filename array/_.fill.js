// Fills elements of array with value from start up to, but not including, end.

// const makeFill = (array, value, start = 0, end = array.length) => {
//   const arrayCopy = [...array];
// eslint-disable-next-line no-plusplus
//   for (let index = start; index < end; index++) {
//     arrayCopy[index] = value;
//   }
//   return arrayCopy;
// };

const makeFill = (array, value, start = 0, end = array.length) => array.fill(value, start, end);

const arr = [1, 2, 3];

// eslint-disable-next-line no-console
console.log(makeFill(arr, 'a'));
// eslint-disable-next-line no-console
console.log(makeFill(Array(3), 2));
// eslint-disable-next-line no-console
console.log(makeFill([4, 6, 8, 10], '*', 1, 3));
