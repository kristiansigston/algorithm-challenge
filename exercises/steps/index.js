// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    const thisLine = Array(i).fill('#').join('') + Array(n - i).fill(' ').join('')
    // console.log(thisLine)
  }
}

function createChars(char, size) {
  let chars = ''
  for (let i = 1; i <= size; i++) {
    chars += char
  }
  return chars
}

function steps2(n) {
  for (let i = 1; i <= n; i++) {
    let ns = createChars('#', i)
    let spaces = createChars(' ', n - i)
    // console.log(ns + spaces)
  }
}

function steps3(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    // console.log(stair)
  }
}

function steps4(n, hashes = '', spaces = Array(n).fill(' ').join('')) {
  if (hashes.length === n) {
    return
  }

  const updatedHashes = hashes += '#'

  // const updatedSpaces = spaces.substring(1)

  // the below is faster over 1,000,000 iterations by around 50ms //386 on this machine
  // probably because this remove the extra character from the end rather than the beginning

  const updatedSpaces = spaces.substring(0, spaces.length)

  // console.log(updatedHashes + updatedSpaces) // 434ms on this machine

  steps4(n, updatedHashes, updatedSpaces)
}


// module.exports = steps4;
module.exports = { steps, steps2, steps3, steps4 };
