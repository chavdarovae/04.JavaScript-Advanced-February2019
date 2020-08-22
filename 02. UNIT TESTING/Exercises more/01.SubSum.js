function subSum(arr, firstIndex, secondIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    if (firstIndex < 0) {
        firstIndex = 0;
    }

    if (secondIndex < 0) {
        secondIndex = 0;
    }

    subArr=arr.slice(firstIndex,secondIndex+1)

    return subArr
    .map(Number)
    .reduce((a,b)=>a+b)
}


module.exports=subSum;