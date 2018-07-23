// Write your solution in this file!
let driver = {
  name: 'CJ',
  car: 'Honda'
};

function updateDriverWithKeyAndValue(object, key, value) {
  let newObject = {...object};
    newObject[key] = value;
    return newObject;
  }
}