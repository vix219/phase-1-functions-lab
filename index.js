// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(42 - pickUpLocation)
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(pickUpLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation)
    return distanceInBlocks * 264
}
distanceFromHqInFeet(43)

// define function called distanceTraveledInFeet
// define two parameters (start, end)
// calculate distance in blocks Match.abs((start - end) * 264)
// return distance in feet travelled

function distanceTravelledInFeet(start, end) {
    const blocks = Math.abs(start - end)
     return blocks * 264
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}