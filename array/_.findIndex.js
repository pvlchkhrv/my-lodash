// This method is like _.find except that it returns the index of the first element 
// predicate returns truthy for instead of the element itself

const makeFindIndex = (array, func, fromIndex = 0) => {
  let index = null;
  // eslint-disable-next-line no-plusplus
  for (let i = fromIndex; i < array.length; i++) {
    const element = array[i];
    if (func(element) === true) {
      index = i;
    }
  }
  return index;
};

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

makeFindIndex(users, (o) => o.user === 'barney');
