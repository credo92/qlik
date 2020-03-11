const { createRandomArray,mergeSort} = require("../sort");
const assert = require("assert");

describe("Problem 1: Sort 100 random integers between 1-99",  ()=>{

    it("mergeSort()",  ()=> {
      
      const randomArray = createRandomArray(100,99,1);
      const randomArraySorted = mergeSort(randomArray);
      const defaultSortedArray = randomArray.sort( (a,b)=>{return a-b} );

      assert.deepEqual(randomArraySorted, defaultSortedArray )
    });

  });
