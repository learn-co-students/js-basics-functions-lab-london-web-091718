// Code your solution in this file!

// hq = 42nd street

function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}


function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264
};


function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return end % start * 264;
  } else {
    return start % end * 264;
  }
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else
    return `cannot travel that far`;
}
