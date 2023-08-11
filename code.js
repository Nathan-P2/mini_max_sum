'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    var maxSum = 0;
    var minSum = 0;
    var i = 0;
        
    var arraySortedDesc = arr.sort();
        
    for(i = 0; i < 4; i++) {
        minSum += arraySortedDesc[i];
    }
    
    var arraySortedAsc = arr.sort().reverse();
    
    for(i = 0; i < 4; i++) {
        maxSum += arraySortedAsc[i];
    }
        
    console.log(minSum, maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
