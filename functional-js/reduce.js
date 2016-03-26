const countWords = (inputWords) => {
  return inputWords.reduce((acc, word)=>{
    // did not pas ass acc[word]++
    acc[word] = ++acc[word] || 1
    return acc;
  }, {})
}

module.exports = countWords
