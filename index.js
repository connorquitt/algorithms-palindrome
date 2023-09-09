function isPalindrome(word) {
  let revWord = word.split('').reverse().join('')
  if(revWord === word){
    return true
  }else{return false}
}

/* 
  use split to seperate each letter into an array and reverse the array before rejoining, set the reversed word to compare to the original word
*/

/*
  i split the original word after each letter and made an array out of it, assigning it to a variable, and then reversed the array and rejoined each letter together. I then compared it to the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
