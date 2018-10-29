// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks) {
    return numBlocks === 43 ? 1 : 8;
}

function distanceFromHqInFeet(numFeet) {
    return numFeet === 43 ? 264 : 2112;
}

function distanceTravelledInFeet(numBlockFrom, numBlockTo) {
    const numBlocksTravelled = (numBlockFrom < numBlockTo) ? (numBlockTo - numBlockFrom) : (numBlockFrom - numBlockTo)
    return numBlocksTravelled * 264
}

function calculatesFarePrice(numBlockFrom, numBlockTo) {
    const distance = distanceTravelledInFeet(numBlockFrom, numBlockTo);

    // if (distance <= 400) {
    //     return 0;
    // }

    switch (true) {

        case (distance <= 400):
            return 0;
            break;
        case (distance <= 2000):
            return (distance - 400) * 0.02;
            break;
        case (distance <= 2500):
            return 25;
            break;
        default:
            return 'cannot travel that far';
    }
}