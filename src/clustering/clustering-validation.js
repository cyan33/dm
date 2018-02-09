const { log, sum } = require('../utils')

function getClusterEntrophy(...arr) {
  const total = sum(arr)

  const singlePointEntrophies = arr.reduce((accu, curr) => {
    const chance = curr / total
    
    const result = chance === 0 ? 0 : parseFloat(chance * log(2, chance))
    return accu + result
  }, 0)

  return {
    singlePointEntrophies
  }
}

exports.getClusterEntrophy = getClusterEntrophy
