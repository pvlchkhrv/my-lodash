//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

//Example 
//_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

const makeCompact = (array: any []) => {
  return array.length > 0 ? array.filter(el => el && el) : [];
};

console.log(makeCompact([0, 1, false, 2, '', 3]));