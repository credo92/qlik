/***
 * Problem 3 : isAnagram using counts of characters in respective strings
 * 
 * @param {String} word1
 * @param {String} word2
 * @returns {Boolean} isAnagram
 */
function isAnagram(word1, word2){
    if(word1 === "" && word2 === "") return true;
    if(word1 === "" ||  word2 === "") return false;
    
    const regex = /[^a-zA-Z]/g;

    word1 = word1.toLowerCase().replace(regex,'');
    word2 = word2.toLowerCase().replace(regex,'');

    if(word1.length !== word2.length) return false;
    
    const wordLen = word1.length;
    const counts = new Array(26).fill(0);

    for (let i = 0; i < wordLen; i++) {
        counts[word1.charCodeAt(i)-97]++;
        counts[word2.charCodeAt(i)-97]--;
    }
    
    for (let i = 0; i < counts.length; i++) {
        if( counts[i]!==0) return false;
    }
    return true;
}


module.exports = {
    isAnagram
}

