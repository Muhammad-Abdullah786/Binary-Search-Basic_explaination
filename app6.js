


let x = [7, 54, 922, 2, 23, 32, 3, 68, 94, 6, 234, 1, 1, 6, 43, 23, 2, 44, 6, 1,] //  an un sorted array 
// first we have to sort it in accending order 

arr = x.sort((a, b) => { // this is a function which takes 2 arguments a and b (any 2 numbers) and sorts them
  return (a - b)
})

console.log(arr)// shows the sorted array 

// now array has been sorted now we will find the target

let target = 922 // element we wnat to find
let left = 0;  // left position of array  meaning  the first index ot the array
let right = arr.length - 1;  // right position of array meaning the last index ot the array length goes to the end of array
let mid;  //mid is undefined it has nothing

while (left <= right) {  // it will keep going until left reaches right side of the array and when it reaches the right side it means target doesn't exist!!
  mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {  // if target exists in the middle of the array
    console.log(` the target  is ${target} at index ${mid} `); // show the target exists
    break; // and then break the loop
  } else if (target < arr[mid]) { // if target is smaller than the middle of the array
    right = mid - 1; // turn the middle point of the array into a right position

  } else { // if target is larger than the middle of the array do opposite
    left = mid + 1;

  }

}
if (left > right) {   // this is optional if target is smaller than tell the usser target doesn't exist
  console.log("invaid the target does not exist ")
} 

// i hope this works for you 