/* const votes = ['1', '2', '3', 'No', 'No', 'Yes', 'No', 'Yes', 'No'];
const array2 = votes.slice(2, 4);
console.log(array2); //[ "1", "2", "3", "No" ]
 */
/* const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0);
console.log(removedArray); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
console.log(votes); //[] */
/* const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, 2, '3', '4');
console.log(removedArray); //[ "1", "2" ]
console.log(votes); //[ "3", "4", "3", "4", "5", "6", "7", "8", "9" ] */
/* const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, 0, '-1', '0');
console.log(removedArray); //[]
console.log(votes); //[ "-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", … ] */

/* const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, votes.length, '-1', '0');
console.log(removedArray); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
console.log(votes); //[ "-1", "0" ]
 */
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const votesString = votes.toString();
const array = votesString.split(',', 4);
console.log(array); //[ "1", "2", "3", "4" ]
console.log(votesString); //'1,2,3,4,5,6,7,8,9'
console.log(votes); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
