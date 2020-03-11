const { isPalindrome,findLargestPalindrome} = require("../palindrome");
const assert = require("assert");

describe("Problem 2: Largest Palindrome",  ()=>{

    it("isPalindrome->11",  ()=> {
  
      assert.equal(isPalindrome(11), true);
    });

    it("isPalindrome->12",  ()=> {
  
        assert.equal(isPalindrome(12), false);
    });

    it("isPalindrome->124",  ()=> {
  
      assert.equal(isPalindrome(124), false);
   });

  it("findLargestPalindrome",  ()=> {
  
    assert.equal(findLargestPalindrome(), 906609);
  });

  });
