/**
 * @param {*} x: base
 * @param {*} y
 */
function log(x, y) {
  return Math.log(y) / Math.log(x);
}

function log2(n) {
  if (n === 0) {
    return 0  // subject to change
  }
  return log(2, n)
}

exports.ln = (x) => {
  return Math.log(x)
}

function sum(arr) {
  return arr.reduce((accu, curr) => {
    if (Array.isArray(curr)) {
      return accu + sum(curr)
    }
    return accu + curr
  }, 0)
}

exports.log = log
exports.log2 = log2
exports.sum = sum
