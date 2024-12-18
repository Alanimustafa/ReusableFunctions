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

//--------------------------------------------------------------------------




//Part 2: Thinking Methodically

console.log ('-------------------------- Part 2: Thinking Methodically---------------')


  let dataBase = [{ id: "42", name: "Bruce", occupation: "Knight", age: 41 },
                  { id: "48", name: "Barry", occupation: "Runner", age: 25 },
                  { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
                  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
                  { id: "7", name: "Bilbo", occupation: "None", age: 111 },
                  { id: "26", name: "Mustafa", occupation: "SW Eng", age: 46 }] ;  // I added this object for testing purposes.



// Sort the array by age.
      dataBase.sort( (first, second) => {  // Using the .sort methode to sort the values
            return Number(first.age) - Number(second.age); // Converted the strings value to numbers and then returned the true of the subtraction to the sort.
          });

      console.log("Database Sorting by Age");
      console.log(dataBase);
      console.log ("------------------------------");



// Filter the array to remove entries with an age greater than 50.
      function filterOver50 (dataBase) {
        result = [];
        for (let i=0 ; i < dataBase.length; i++) {
          if (Number(dataBase[i].age) < 50) {
            result.push(dataBase[i]);      
          }
        }
        console.log(result);
        
      }
      console.log("Remove entries with an age over 50")
      filterOver50(dataBase);
      console.log("-----------------------------------");

//Map the array to change the “occupation” key to “job” and increment every age by 1.
      function changePrpertyName (dataBase) {
        for (let i=0 ; i < dataBase.length; i++) {
          dataBase[i].job = dataBase[i].occupation; // Addign a new property called job which is a copy of Occupation.
          delete dataBase[i].occupation; // Removing the occupation from the object.
        }
        console.log(dataBase);
      }

      console.log("Changing the Occupation to Job")
      changePrpertyName(dataBase);
      console.log("-----------------------------------");



// Use the reduce method to calculate the sum of the ages and the age average.
        function ageSUMM () {
          let sum = 0;
          for (let i=0 ; i < dataBase.length; i++) {
            sum += Number (dataBase[i].age);
          }
          avg = sum / dataBase.length ;
          console.log(`The sum of all ages is ${sum}`);
          console.log(`The age average is ${avg} years old`);
        }
  
        console.log("CAlculating the Age Summ")
        ageSUMM(dataBase);
        console.log("-----------------------------------");


//--------------------------------------------------------------------------




//Part 3: Thinking Critically

// Take an object and increment its age field.
        function ageIncrement (mainDBase) {
            for (let ages in mainDBase) {
              mainDBase[ages].age = mainDBase[ages].age+1 ; 
            }
            console.log(mainDBase);             
        }
        console.log("Part 3: Thinking Critically");
        ageIncrement(dataBase); 

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
      function copyObject (original) {
        let dataBaseCopy = [];
        for (obj in original) {
          dataBase[obj].age = dataBase[obj].age + 1;
          dataBaseCopy.push(dataBase[obj]);
        }
        console.log(dataBaseCopy);
      } 
      copyObject(dataBase);       


// -------------------------------------------------------------- Creating Reusable Functions - End ---------------------------------------      
        