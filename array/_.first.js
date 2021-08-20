const makeFirst = (array) => {
  if (!array.length) return undefined;
  return array[0];
};
// eslint-disable-next-line no-console
console.log(makeFirst([1, 2, 3]));
// eslint-disable-next-line no-console
console.log(makeFirst([]));
