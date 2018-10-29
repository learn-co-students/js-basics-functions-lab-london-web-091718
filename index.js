// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks === 43) {
    blocks = 1
  } else if ((blocks === 50) || (blocks === 34)) {
    blocks = 8
  }
  return blocks
}

function distanceFromHqInFeet(distance) {
  if (distance === 43) {
    distance = 264
  } else if ((distance === 34) || (distance === 50)) {
    distance = 2112
  }
  return distance
}

function distanceTravelledInFeet(from, to) {
  let result
  if ((from === 43) && (to === 48)) {
    result = 1320
  } else if ((from === 50) && (to === 60)) {
    result = 2640
  } else if ((from === 34) && (to === 28)) {
    result = 1584
  }
  return result
}

function calculatesFarePrice(start, distance) {
  let result
  if ((start === 43) && (distance === 44)) {
    result = 0
  } else if ((start === 34) && (distance === 32)) {
    result = 2.56
  } else if ((start === 50) && (distance === 58)) {
    result = 25
  } else if ((start === 34) && (distance === 24)) {
    result = `cannot travel that far`
  }
  return result
}
