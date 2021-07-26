// Creates an array with all falsey values removed.
// Example.
// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

const makeCompact = (array) => {
  if (!array) {
    throw new Error('No array as an argument!');
  }
  if (array.length < 1) return [];
  return array.length > 0 ? array.filter((el) => el && el) : [];
};

// eslint-disable-next-line no-console
console.log(makeCompact([0, 1, false, 2, '', 3]));
// eslint-disable-next-line no-console
console.log(makeCompact());
