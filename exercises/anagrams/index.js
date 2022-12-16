// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function normaliseString(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('').toUpperCase()
}

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false

  const sanitisedStringA = normaliseString(stringA)
  const sanitisedStringB = normaliseString(stringB)

  return sanitisedStringA === sanitisedStringB
}

function buildCharMap(str) {
  const charMap = {}

  // remove all non alphanumeric characters
  const sanitisedString = str.replace()
  for (let char of sanitisedString) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}


function anagrams2(stringA, stringB) {
  const charMapA = buildCharMap(stringA)
  const charMapB = buildCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

module.exports = anagrams2;
