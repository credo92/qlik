/**
 * Problem 1: Generate a list of 100 random integers between 1 and 99.
  Write a program to sort this list, from lowest to highest, 
  without using a language specific method that sorts a list for you
 */
function createRandomArray(len,max,min){
    return [...Array(len)].map( () => getRandomInt(max,min));
 }

/**
 * Math.random generates between 1 & 99
 */
function getRandomInt(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * merge left and right half based on which elements are greater
 * @param {Number} l left 
 * @param {Number} r right
 * @returns {Array} 
 */
function merge (l, r) {
    let resultArray = [], lIndex = 0, rIndex = 0;
  
    while (lIndex < l.length && rIndex < r.length) {

      if (l[lIndex] < r[rIndex]) {
        resultArray.push(l[lIndex]);
        lIndex++;
      } else {
        resultArray.push(r[rIndex]);
        rIndex++; 
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(l.slice(lIndex))
            .concat(r.slice(rIndex));
  }

  /**
   * merge sort
   * @param {Array} randomArray 
   */
function mergeSort (randomArray) {
    if (randomArray.length <= 1) {
      return randomArray;
    }

    const middle = Math.floor(randomArray.length / 2);
  
    const left = randomArray.slice(0, middle);
    const right = randomArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }

  module.exports = {
    createRandomArray,
    mergeSort
  }
