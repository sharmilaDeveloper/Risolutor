function uniqueNumber(arr) {
  const num = arr.find(num => arr.filter(x => x === num).length === 1) 
  return num ?? -1;
}

const arr1 = [4, 10, 5, 4, 2, 10]
const arr2 = [4,10,10,4,5,5]
console.log(`Array1: ${arr1}, Unique Number: `,uniqueNumber(arr1));
console.log(`Array2: ${arr2}, Unique Number: `,uniqueNumber(arr2));
