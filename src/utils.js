/**
 * @param {*} x: base
 * @param {*} y
 */
exports.log = (x, y) => {
  return Math.log(y) / Math.log(x);
}

exports.ln = (x) => {
  return Math.log(x)
}

exports.sum = (arr) => {
  return arr.reduce((accu, curr) => {
    return accu + curr
  }, 0)
}
