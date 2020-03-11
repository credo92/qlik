/***
 * Problem 2 : Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 * @returns {Number} largestPalindrome
 */
function findLargestPalindrome(){
    let largestPalindrome = 0;
    for (let i = 999; i >=100; i--) {
        for (let j = 999; j >=100; j--) {
            if( isPalindrome(i*j)){
                if(i*j>largestPalindrome){
                    largestPalindrome= i*j;
                }
            }
        }  
    }
    return largestPalindrome;
}

/**
 * check if number is palindrome
 * @param {Number} num 
 * @returns {Boolean} isPalindrome 
 */
function isPalindrome(num){
const reverse = parseInt(num.toString()
                            .split('')
                            .reverse()
                            .join('')
                        );
return num === reverse ? true:false;
}


module.exports = {
    isPalindrome,
    findLargestPalindrome
}
