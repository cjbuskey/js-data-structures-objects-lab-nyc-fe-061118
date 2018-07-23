// Write your solution in this file!
let driver = {
  name: 'CJ',
  car: 'Honda'
};

function updateDriverWithKeyAndValue(obj, key, value) {
  let newObject = {...obj};
    newObject[key] = value;
    return newObject;
  }
}