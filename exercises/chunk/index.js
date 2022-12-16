// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunkFromGPT(array, size) {
  // create an empty array to store the chunks
  let chunked = [];

  // loop through the array
  for (let element of array) {
    // get the last element in the chunked array
    let last = chunked[chunked.length - 1];
    // if the last element doesn't exist or its length is equal to the chunk size
    if (!last || last.length === size) {
      // push a new chunk into the array with the current element
      chunked.push([element]);
    } else {
      // otherwise, add the current element to the last chunk
      last.push(element);
    }
  }

  return chunkFromGPT;
}

function chunkMyOld(array, size) {
  let tempArray = array
  let bigArray = []
  while (tempArray.length) {
    let smallArray = []
    for (let i = 1; i <= size && tempArray.length; i++) {
      smallArray.push(tempArray.shift())
    }

    bigArray.push(smallArray)
  }

  return bigArray
}

function chunkSlice(array, size) {
  const chunkTotal = Math.ceil(array.length / size)
  return new Array(chunkTotal).fill('').map((_, index) => array.slice(index * size, index * size + size)).filter(Boolean)
}

// function chunkMy(array, size) {
//   const chunked = []
//   for (let element of array) {

//   }
// }

// module.exports = chunkSlice;
module.exports =  { chunkMyOld, chunkFromGPT, chunkSlice };
