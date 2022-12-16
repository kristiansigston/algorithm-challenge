// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt2(n) {
  if (n === 0) return n
  let num = n

  const isNeg = n <= 0

  if (isNeg) {
    num = Math.abs(n)
  }

  const result = parseInt(num.toString().split('').reverse().join(''), 10)

  if (isNeg) {
    return result * -1
  }

  return result
}

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}


module.exports = { reverseInt, reverseInt2 };

