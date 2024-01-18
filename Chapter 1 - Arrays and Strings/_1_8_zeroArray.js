/*
    ZERO ARRAY

    Write an algorithm such that if an element in an M x N matrix is 0, it's entire row and column are set to 0;
*/


const testMatrixA = [
    [0, 1, 2, 3],
    [4, 5, 0, 6],
    [7, 8, 9, 1],
    [2, 3, 4, 5]
];

const testMatrixB = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 0]
];

const testMatrixC = [
    [0, 1, 2, 3],
    [4, 5, 6, 6],
    [7, 8, 9, 0],
    [2, 3, 4, 5]
];

const zeroArray = (matrix) => {
    const numOfRows = matrix.length;
    const numOfCols = matrix[0].length;
    const rowsToZero = [];
    const colsToZero = [];

    for (i = 0; i < numOfRows; i++) {
        let arrayRow = matrix[i];

        for (j = 0; j < numOfCols; j++) {
            if (arrayRow[j] === 0) {
                rowsToZero.push(i);
                colsToZero.push(j);
            }
        }
    }
    for (i = 0; i < numOfRows; i++) {
        let arrayRow = matrix[i];
        
        for (j = 0; j < numOfCols; j++) {
            
            if (rowsToZero.includes(i) || colsToZero.includes(j)) {
                arrayRow[j] = 0;
            };
            
        }
    }

    console.log('rows to Zero: ', rowsToZero);
    console.log('cols to Zero: ', colsToZero);
    console.log('Zerod Matrix: ', matrix);
};
zeroArray(testMatrixA);