const { reverse, reverse2, reverse3 } = require('../reversestring')
// const { } = require('../reverseint')
const { chunkFromGPT, chunkMyOld, chunkSlice } = require('../chunk')
const { performance } = require('perf_hooks');
const { capitalize, capitalize2 } = require('../capitalize');
const { steps, steps2, steps3, steps4 } = require('../steps')

const ITERATIONS = 1_000_000

const speedMeString = () => {
  console.log('******************')
  console.log('Speed Me Int Start\n')
  startTime = performance.now()
  for (let i = 0; i < ITERATIONS; i++) {
    reverse(Math.random().toString())
  }

  const endTime = performance.now()

  console.log('v1: ', endTime - startTime + 'ms')

  startTime2 = performance.now()
  for (let j = 0; j < ITERATIONS; j++) {
    reverse2(Math.random().toString())
  }

  const endTime2 = performance.now()

  console.log('v2: ', endTime2 - startTime2 + 'ms')

  startTime3 = performance.now()
  for (let k = 0; k < ITERATIONS; k++) {
    reverse3(Math.random().toString())
  }

  const endTime3 = performance.now()

  console.log('v3: ', endTime3 - startTime3 + 'ms\n')
  console.log('Speed Me Int End')
  console.log('*****************\n')
}

const speedMeChunk = () => {
  console.log('******************')
  console.log('Speed Me Chunk Start\n')
  startTime = performance.now()
  for (let i = 0; i < ITERATIONS; i++) {
    chunkFromGPT([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  }

  const endTime = performance.now()

  console.log('v1: ', endTime - startTime + 'ms')

  const startTime2 = performance.now()
  for (let i = 0; i < ITERATIONS; i++) {
    chunkMyOld([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  }

  const endTime2 = performance.now()

  console.log('v2: ', endTime2 - startTime2 + 'ms')
  startTime3 = performance.now()
  for (let i = 0; i < ITERATIONS; i++) {
    chunkSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  }

  const endTime3 = performance.now()

  console.log('v2: ', endTime3 - startTime3 + 'ms')
}

const speedMyFunc = (funcs) => {
  funcs.forEach((func, index) => {
    const startTime = performance.now()

    for (let i = 0; i < ITERATIONS; i++) {
      func()
    }

    const endTime = performance.now()

    console.log(`Function-${index + 1}`, endTime - startTime + 'ms')
  })
}
const theString = 'doing my duty to the cause'
const theStepNumber = 10

// speedMyFunc([capitalize.bind({}, theString), capitalize2.bind({}, theString)])
speedMyFunc([steps.bind({}, theStepNumber), steps2.bind({}, theStepNumber), steps3.bind({}, theStepNumber), steps4.bind({}, theStepNumber)])