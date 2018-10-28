// Code your solution in this file!
function distanceFromHqInBlocks(num1) {
  if (num1 > 42){
    return (num1 - 42)
  }
  else if (num1 <= 42){
    return (42-num1)
  }
}


function distanceFromHqInFeet(num) {
  let blocks = distanceFromHqInBlocks(num)
  return blocks * 264
}

function distanceTravelledInFeet(num1, num2){
  if (num1>num2){
    return (num1-num2)*264
  }
  else if (num1<num2){
    return (num2-num1)*264
  }
}


function calculatesFarePrice(num1,num2){
  totalDistance=distanceTravelledInFeet(num1,num2)
  if (totalDistance>2500){
    return 'cannot travel that far'
  }
  else if (totalDistance>=2000 && totalDistance<=2500){
    return 25
  }

  else if (totalDistance > 400 && totalDistance<2000){
    return (totalDistance - 400) * 0.02
  }
  else if (totalDistance<=400) {
    return 0
  }

}
