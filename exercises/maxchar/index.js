// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charsContainer = {}
  for (char of str) {
    if (charsContainer[char]) {
      charsContainer[char] += 1
    }
    else {
      charsContainer[char] = 1
    }
  }
  const result = Object.keys(charsContainer).reduce((highest, char) => {
    return charsContainer[char] > charsContainer[highest] ? char : highest
  })
  return result
}

// for (item of array)
// for (hash in object)

module.exports = maxChar;
exports.maxChar = maxChar
