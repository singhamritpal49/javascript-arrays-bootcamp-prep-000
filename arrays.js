var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element) {
return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
return [...array, element]
}

function accessElementInArray(array, index) {
return array[index]
}
function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(array);
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array
}
