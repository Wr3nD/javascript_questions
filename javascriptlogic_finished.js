// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a
// function that organizes these into individual array that is ordered.
//  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
//   Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]





const numbers = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// I want to create this [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

// [1,2,4,5,10,20,391,392,591]
const uniqueNumbers = [...new Set(numbers)];
uniqueNumbers.sort((a, z) => a - z); // asc

console.log("uniqueNumbers", uniqueNumbers);
console.log("---grouping---");

const groupedSortedValues = uniqueNumbers.reduce((groupedValues, currentUniqueNumber) => {
    console.log(
        `- running with ${currentUniqueNumber}, last round values: ${JSON.stringify(
        groupedValues
        )}`
    );

    const numberOccurrences = numbers.filter((originalNumber) => originalNumber === currentUniqueNumber); // always an array
    const storedValue = numberOccurrences.length === 1 ? numberOccurrences[0] : numberOccurrences;

    console.log("numberOccurrences", numberOccurrences);
    console.log("storedValue", storedValue);

    return [...groupedValues, storedValue];
},[]);

console.log(groupedSortedValues);

// Question 2: Write a javascript function that takes an array of numbers and a target number.
//  The function should find two different numbers in the array that, when added together,
//   give the target number. For example: answer([1,2,3], 4)should return [1,3]

const numbers1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let array = [1,2,3,4,5]
let answer = 8;

let twoSum = function(arr,target){
 let sums = [];
    for(let i = 0; i < arr.length; i++){

        for(let j = 0+1; j < arr.length; j++){

            if(arr[i] + arr[j] == target){
                sums.push(arr[i], arr[j]);
                return sums
            }
        }
    }
    

}
console.log(twoSum([15, 1, 11, 2],3))


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that
//  if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
  String.prototype.convertToRGB = function(){
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

console.log('1502BE'.convertToRGB());
console.log('ff0000'.convertToRGB());
console.log('f00'.convertToRGB());