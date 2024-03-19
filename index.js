// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42){
        return blockNumber-42;

    } else 
    return 42 - blockNumber;

}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;

}
function distanceTravelledInFeet(start,destination){
    if (start < destination){
        return (destination - start) * 264;

    }else
    return ( start -destination) *264;

}
function calculatesFarePrice(start, destination){
    const feetNumber = distanceTravelledInFeet(start,destination)
    if (feetNumber < 400){
        return  0

    } 
    if (feetNumber > 400, feetNumber < 2000){
        return  .02*(feetNumber -400)

    }
    if (feetNumber>2000, feetNumber<2500){
        return 25

    }
    if (feetNumber>2500){
        return "cannot travel that far"

    }


}