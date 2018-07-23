// Write your solution in this file!
let driver = {
  name: 'CJ',
  car: 'Honda'
};

function updateDriverWithKeyAndValue(newObject, key, value) {
  let newObject = {...driver};
    newObject.[key] = value;
  };
}