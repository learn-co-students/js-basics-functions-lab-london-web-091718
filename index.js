// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 43 || distance < 43) {
    return 8;
  } else {
    return 1;
  }
}

function distanceFromHqInFeet(distance) {
  return (distanceFromHqInBlocks(distance) * 264)
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return ((end - start) * 264);
  } else if (start > end) {
    return ((start - end) * 264);
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end); {
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance < 400) {
      return 0
    } else if (distance < 2000) {
      return ((distance - 400) * 0.02);
    } else if (distance > 2000){
      return 25;
    }
  }
}
