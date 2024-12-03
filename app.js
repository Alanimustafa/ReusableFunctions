// ALAB 308.5.1: Creating Reusable Functions
//------------------------------------------



// Part 1: Thinking Functionally

// Part 1: Take an array of numbers and return the sum.

const sumArray = function () { // Function Expression has been used in this part.
  let sumResult = 0 ; 
    for (let i = 0; i < arguments.length; i++) { // the arguments key-word has been used to call the other array's values.
     sumResult += arguments[i];    // The summation 
     
    }
    return sumResult; // returning the result.
}

console.log (`The arry SUM is: ${sumArray(10,20,30)}`);



//--------------------------------------------------------------------------



//Part 1: Take an array of numbers and return the average.

function arrayAgerage (grades) {
  let i =0 ;
  let average
  let gradeSum = 0;
  while (i < grades.length) {
    gradeSum += grades[i];
    i++; 
  }
  //console.log(grades);
  average = (gradeSum / grades.length);
  console.log(`The Average of ${grades} is : ${average}`);
}


arrayAgerage ([10,20,30])


//--------------------------------------------------------------------------



//Part 1: Take an array of strings and return the longest string.
//Part 1: Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

const longestString = function (strings, index) { // Function Expression 
  let i = 0 ; // Index
  let lengthResult = 0; // string Length Saving Results for each loop 
  let lengthResultValue; // A Value to store the string.
  strings.length = index || strings[i].length; // Assigning weather the string Length is provided as an argument or not.
  strings.forEach(string => {   //forEach Loop has been used to loop through the array (strings).
    
    if (strings[i].length > lengthResult) { // The comparision of the array strings.
      lengthResult = strings[i].length  //saving the results in LengthResults each time until reach the longest.
      lengthResultValue = strings[i]; // saving the value of the string in LengthResultValue to console it later.
    } 
      i++ // increment the index.
    
  });
  console.log(`${lengthResultValue} has the longest string of ${lengthResult} characters`);
}

// Part 1 - 3 | Take an array of strings and return the longest string.
longestString(["Red", "Green", "Blue","Purpule"]);


// Part 1 - 3 | Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
longestString(["Red", "Green", "Blue","Purpule"],4);

//--------------------------------------------------------------------------



//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let allNums = [];
function numbersIn(n, startNumber = 1) {
  if (startNumber > n-2) { // I deduct 2 becasue I added 1 to the start, the difference to oupt only the numbers in between.
    return; // To break the loop if the n exceeds the N number. 
  }
  allNums.push(startNumber+1); // I created an array to push the results in it. I Added (1) to start from (2) or the next number after the start number.
  
  numbersIn(n, startNumber + 1); // Recursive call with incremented current
   return `The numbers between ${startNumber} and ${n} are : ${allNums}`; 
}

console.log(`------------------------------------------------------`)
console.log(numbersIn(5));



