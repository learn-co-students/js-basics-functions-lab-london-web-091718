// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber>42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (blockNumber1, blockNumber2) {
  if (blockNumber2 > blockNumber1){
    return (blockNumber2 - blockNumber1)*264;
  } else {
    return (blockNumber1 - blockNumber2)*264;
  }
}

function calculatesFarePrice(blockNumber1, blockNumber2){
  if (distanceTravelledInFeet (blockNumber1, blockNumber2) >2500){
    return "cannot travel that far";
  } else if (distanceTravelledInFeet (blockNumber1, blockNumber2) <=400) {
    return 0;
  } else if (distanceTravelledInFeet (blockNumber1, blockNumber2) <2000) {
    return (distanceTravelledInFeet (blockNumber1, blockNumber2) - 400)*0.02;
  } else if (distanceTravelledInFeet (blockNumber1, blockNumber2) >2000) {
    return 25;
  }
}
