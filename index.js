// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  const hq = 42;
  return Math.abs(hq - distance);
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
  travelled = distanceTravelledInFeet(start, end);
  if (travelled < 401) {
    return 0;
  } else if (travelled > 400 && travelled < 2001){
    return  (travelled - 400) * 0.02;
  } else if (travelled > 2000 &&  travelled < 2501) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
