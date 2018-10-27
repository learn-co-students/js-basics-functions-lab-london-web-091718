// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  const hqStreet = 42
  let distanceInBlocks;
  distanceInBlocks = location - hqStreet;
  if(location < 42) {
    distanceInBlocks = hqStreet - location;
  }
  return distanceInBlocks;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  let blocksDistance;
  if(destination < start) {
    blocksDistance = start - destination;
  } else {
    blocksDistance = destination - start;
  }
  return blocksDistance * 264;
}


function calculatesFarePrice(start, destination) {
  let farePrice;
  let calculationOfFeet;
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if(distanceInFeet <= 400) {
    farePrice = 0;
  } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
    calculationOfFeet = distanceInFeet - 400;
    farePrice = calculationOfFeet * 0.02;
  } else if(distanceInFeet > 2000 && distanceInFeet <= 2500) {
    farePrice = 25;
  } else {
    return 'cannot travel that far'
  }
  return farePrice;
}
