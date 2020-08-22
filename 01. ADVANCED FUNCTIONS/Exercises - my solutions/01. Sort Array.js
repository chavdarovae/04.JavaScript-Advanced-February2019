function sortArray(inputArray, sortMethod){
    let ascComparor=function (a,b) {
        return a-b        
    };
    let descComparor=function (a,b) {
        return b-a        
    };
    let compareObj={
        'asc': ascComparor,
        'desc': descComparor
    }

    return inputArray.sort(compareObj[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));