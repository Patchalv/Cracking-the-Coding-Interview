/*
    ROTATE MATRIX

    Given an image represented by N x N matrix, where each pixel in the images is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/*
    SOLUTION:
   Initialize a new empty matrix array.

   Use nested loops:
    for ( i=0 -> old cols ++)
        for (j = old rows -> 0 --)
            push items to new row array.
        push new row array to new matrix array
    return new matrix
    
*/

const testMatrix1 = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [0, 0, 1, 2],
    [1, 0, 0, 1]
];

rows = 3 // m = 2
cols = 4 // n = 3

const testMatrix2 = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [0, 0, 1, 2]
];


const rotateMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = [];

    for (i = 0; i < cols; i++) {
        let newRow = [];
        for (j = rows - 1; j >= 0; j--) {
            let oldRow = matrix[j];
            newRow.push(oldRow[i]);
        }
        newMatrix.push(newRow);
    }
    console.log(newMatrix);
};

rotateMatrix(testMatrix2);
