
function distanceFromHqInBlocks(pickup){
  if (pickup > 42) {
    return pickup - 42
  } else {
    return 42 - pickup
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, destination) {
  if (pickup > destination) {
    return(pickup - destination) * 264
  } else {
    return (destination - pickup) * 264
  }
}

function calculatesFarePrice(pickup, destination) {
  const distance = (distanceTravelledInFeet(pickup, destination))
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400)
  }  else if (distance > 2000 && distance < 2500){
    return 25.0
  } else {
    return "cannot travel that far"
  }
}
