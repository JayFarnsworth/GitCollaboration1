var jayArray = [1,2,3,4,5,6,7,8,9,10];
function getEvens(array){
  var evens = [];
  for (num in array) {
    if (num % 2 === 0) evens.push(num)
  } return evens;
}
console.log(getEvens(jayArray))