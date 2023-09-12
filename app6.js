


let x = [7, 54, 922, 2, 23, 32, 3, 68, 94, 6, 234, 1, 1, 6, 43, 23, 2, 44, 6, 1,] //  an un sorted array 
// first we have to sort it in accending order 

arr = x.sort((a, b) => {
  return (a - b)
})

console.log(arr)// shows the sorted array 

// now array has been sorted and it's inste x constant  now we will find the target

let target = 922 // element we wnat to find
let left = 0;
let right = arr.length - 1;
let mid;  //mid is undefined it has nothing

while (left <= right) {
  mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    console.log(` the target  is ${target} at index ${mid} `);
    break;
  } else if (target < arr[mid]) {
    right = mid - 1;

  } else {
    left = mid + 1;

  }

}
if (left > right) {
  console.log("invaid the target does not exist ")
} 