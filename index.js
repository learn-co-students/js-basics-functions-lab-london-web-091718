// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return (block - 42)
  } else if (42 > block) {
    return (42 - block)
  } else return 0
}


function distanceFromHqInFeet(block){
  return (distanceFromHqInBlocks(block))*264
}

function distanceTravelledInFeet(block1, block2){
  let result = (block1 - block2);
  return Math.abs(result*264);
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400){
    return 0;
  } else if (distance < 2000){
    return ((distance - 400)*2)/100;
  } else if (distance > 2000 && distance < 2500){
    return 25;
  } else if (distance > 2500){
    return 'cannot travel that far';
  }
}
