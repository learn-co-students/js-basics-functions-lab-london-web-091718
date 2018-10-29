// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return Math.abs((street - 42)*264);
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs((finish - start)*264);
}

function calculatesFarePrice(start, finish) {
  distance = distanceTravelledInFeet(start, finish)
  if (distance > 2500) {
    return `cannot travel that far`;
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  } else {
    return 0;
  }
}
