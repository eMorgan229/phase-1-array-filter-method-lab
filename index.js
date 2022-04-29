// Code your solution here

function findMatching(array, inputString) {
    return array.filter(
     (possibleMatchString => possibleMatchString.toLowerCase() === inputString.toLowerCase())    
     );
  }


 function fuzzyMatch(array, inputString) {
     return array.filter(
        (possibleMatchingString => possibleMatchingString.startsWith(inputString))
    );
 }
     

function matchName(array, inputString) {

    return array.filter(
         (possibleMatchString => possibleMatchString.name === inputString)  
    );
 }

