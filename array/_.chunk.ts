//creates an array of elements split into groups the lengths of size. If array can't be split evenly, the final chunk will be the remaining elements.

//Examples 
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const makeChunk = (array: any[], lengthOfChunk: number) => {
  if (array.length < 1) return [];
  const arrayCopy = [...array];
  const result = [];
  while (arrayCopy.length > lengthOfChunk) {
    result.push(arrayCopy.splice(0, lengthOfChunk));
  }
  result.push(arrayCopy);
  return result;
};

console.log(makeChunk(["a", "b", "c", "d"], 3));