// how would you determine if two objects had the same key/value pairs??
/*
function objectsEqual(obj1, obj2) {
  
  if ( !sameNumberOfProperties(obj1, obj2) ) return false;
  
  if ( keysMatch(obj1, obj2) && valsMatch(obj1, obj2) ) return true;
  return false;
}

function sameNumberOfProperties(obj1, obj2) {
  let obj1Len = Object.values(obj1).length;
  let obj2Len = Object.values(obj2).length;
  
  return obj1Len === obj2Len;
}

function keysMatch(obj1, obj2) {
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();
  
  return obj1Keys.every( (key, index) => obj2Keys[index] === key);
}

function valsMatch(obj1, obj2) {
  let obj1Vals = Object.values(obj1).sort();
  let obj2Vals = Object.values(obj2).sort();
  
  return obj1Vals.every( (val, index) => obj2Vals[index] === val);
}
*/

function objectsEqual(object1, object2) {
  if (keyMatch(object1, object2) && valueMatch(object1, object2)) {
    return true;
  }
  
  return false;
}

function keyMatch(obj1, obj2) {
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();
  
  if (obj1Keys.length !== obj2Keys.length) return false;
  
  return obj1Keys.every((key, index) => key === obj2Keys[index]);
}

function valueMatch(obj1, obj2) {
  let obj1Vals = Object.values(obj1).sort();
  let obj2Vals = Object.values(obj2).sort();  
  
  if (obj1Vals.length !== obj2Vals.length) return false;
  
  return obj1Vals.every((key, index) => key === obj2Vals[index]);
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false