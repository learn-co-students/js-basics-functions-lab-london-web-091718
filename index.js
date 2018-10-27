// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return (block - 42)
  }
  else {
    return (42 - block)
  }
}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(d1, d2) {
  if (d1 > d2) {
    return ((d1 - d2) * 264);
  }
  else {
    return ((d2 - d1) * 264);
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else if (distance < 2500) {
    return 25;
  }
  else if (distance > 2500){
    return 'cannot travel that far';
  }
}
