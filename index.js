const feet = 264
function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) {
        return (blocks - 42) * -1;
    } else return blocks - 42;
}

function distanceFromHqInFeet(blocks) {
    let numberOfBlocks = distanceFromHqInBlocks(blocks)
    return numberOfBlocks * 264;
}

function distanceTravelledInFeet(start, end) {
    let distance = Math.abs(start - end);
    return distance * feet
}

function calculatesFarePrice(start, destination) {
    let driveLength = (Math.abs(start - destination) * 264);
    if (driveLength <= 400) {
        return 0;
    } else if (driveLength > 400 && driveLength <= 2000) {
        return 0.02 * (driveLength - 400);
    } else if (driveLength > 2000 && driveLength < 2500) {
        return 25;
    } else if (driveLength > 2500) {
        return 'cannot travel that far';
    }

}