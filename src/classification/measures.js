const sum = require('../utils').sum
const log2 = require('../utils').log2

/**
 * enter the quantity of each class, like:
 * getNodeEntropy(1, 2)
 */

function getNodeEntropy(...args) {
  const total = sum(args)
  return args.reduce((accu, curr) => {
    return accu - (curr / total) * log2(curr / total)
  }, 0)
}

/**
 * getAverageEntropy(
 *   [1, 1],
 *   [2, 2],
 *   [4, 2]
 * )
 */

function getAverageEntropy(...classes) {
  const total = sum(classes)
  return classes.reduce((accu, curr) => {
    return accu + (sum(curr) / total * getNodeEntropy(...curr))
  }, 0)
}

/**
 * The sequence in each sub array matters!
 */
function getSplitGain(parent, ...classes) {
  const parentEntropy = getNodeEntropy(...parent)

  return parentEntropy - getAverageEntropy(...classes)
}

// test cases
console.log(getNodeEntropy(1,0))
console.log(getNodeEntropy(3,2))
console.log(getNodeEntropy(0,1))

console.log(getSplitGain(
  [4,3],
  [1,0],
  [3,2],
  [0,1]
))
