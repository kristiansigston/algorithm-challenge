// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversed = str.split('').reverse().join('');
  return reversed
}

function reverse2(str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }

  return reversed
}

function reverse3(str) {
  return str.split('').reduce((word, char) => {
    return char + word
  }, '')
}

module.exports = { reverse, reverse2, reverse3 };
