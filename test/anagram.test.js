const {isAnagram} = require("../anagram");
const assert = require("assert");

describe("Problem 3 : Anagram",  ()=>{

    it("Debit Card, Bad Credit",  ()=> {
  
      assert.equal(isAnagram("Debit Card","Bad Credit"), true);
    });

    it("Astronomer, Moon starer",  ()=> {
  
      assert.equal(isAnagram("Astronomer","Moon starer"), true);
    });


    it("These churn air, The Hurricanes",  ()=> {
  
      assert.equal(isAnagram("These churn air", "The Hurricanes"), true);
    });

    
    it("Dormitory, Dirty rooms",  ()=> {
  
      assert.equal(isAnagram("Dormitory", "Dirty rooms"), false);
    });

  });
