const diagonalDifference = arr => {
    // variables to add up diagonal numbers
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    // nested loop to go over every element
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            // i === j
            if(i === j) {
                // then we can add up out left diagonal, because index will incremental by 1 (i , j)
                leftDiagonal += arr[i][j];
                // opposite side, right diagonal will be arr[i][arr.length - 1 - i ]
                rightDiagonal += arr[i][arr.length - 1 - i];
            }
        }
    }
    // console.log(leftDiagonal)
    // console.log(rightDiagonal)
    // found the abs value
    return Math.abs(leftDiagonal-rightDiagonal);
}

let matrix = [
                [11,2,4],
                [4,5,6],
                [10,8,-12],
                            ]
console.log(diagonalDifference(matrix))






function diagonalDifference(arr) {
    // variable of leftDiagonal, rightDiagonal;
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    // iterate the array;
    for(let i = 0; i < arr.length; i++) {
        // keep track of i, which is the front index;
        // keep track of j (arr.length - 1 - i), which is the end index
        let j = arr.length - 1 - i;
        // console.log(arr[i][i])
        // console.log(arr[i][j])
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][j];
    }
    return Math.abs(leftDiagonal-rightDiagonal);
}



let matrix = [
    [11,2,4],
    [4,5,6],
    [10,8,-12],
                ]
console.log(diagonalDifference(matrix))