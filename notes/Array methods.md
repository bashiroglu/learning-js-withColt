# Array Methods

- forEach is the array method to loop elements of array.

We use like below, n represent the element of array.

```
const numbers = [1, 2, 'three', 'five'];

numbers.forEach(function(n) {
  console.log(n);
});
```

Optionaly we can also get index of array element

```
const numbers = [1, 2, 'three', 'five'];

numbers.forEach(function(n, idx) {
  console.log(n, idx);
});

```

Optionaly we can also pass function to the array. We can use like below

```
const numbers = [1, 2, 'three', 'five'];
function logElement(n, idx) {
  console.log(n, idx);
}
numbers.forEach(logElement);
```

- Map is very usefull array method like forEach, it is especially usefull when we want to create new array.

```
const nums = [1, 3, 4, 5, 6];

const doubledNums = nums.map(function(num) {
  return num * 2; //return is important
});

console.log(doubledNums); //[2, 6, 8, 10, 12]
```

one key point about it is that we have to return inside of function and assign returned valu to variable to continue the process. Otherwise we will face with several undefined

```
const nums = [1, 3, 4, 5, 6];

const doubledNums = nums.map(function(num) {
  num * 2; //we don't have return here
});

console.log(doubledNums); //[undefined, undefined, undefined, undefined, undefined]
```

- Find is another usefull array method, it loop elements of array and give us first element which in it, given function returned true.

```
const names = ['Adam ', 'Edward', 'John'];

const wantedPerson = names.find(name => name.includes('John'));

 console.log(wantedPerson); //'John'
```

if we have many matched element find return first one.

```
const names = ['Adam ', 'Edward', 'John 1','John 2'];

const wantedPerson = names.find(name => name.includes('John'));

 console.log(wantedPerson); //'John 1'
```

- Filter is another array methods, we use it to filter given array and return new array with is passed our filter function(returned true in its own case).

```
const nums = [2, 4, 5, 6, 7, 119, 222, 50];

const Number = 6;

const isBiggerThanFive = Number => Number > 5;

console.log(isBiggerThanFive(Number)); // true

const biggerThanFiveNums = nums.filter(num => num > 5);
console.log(biggerThanFiveNums); //[6, 7, 119, 222, 50]
```

It means while iteration, when function return true, num will be added to the array if false, not added.

Also it is good to keep mind that the main array won't be modified.

```
const nums = [2, 4, 5, 6, 7, 119, 222, 50];
const biggerThanFiveNums = nums.filter(num => num > 5);
console.log(nums); // [2, 4, 5, 6, 7, 119, 222, 50]
```

- Some and Every are another array methods but they return boolean value based on given function.

1. For some to return true, it is enough to have any value which matchs with array element.
2. For every to return true, every element in array should match with function.

```
const nums = [2, 4, 5, 6, 7, 119, 222, 50];

const isAnyOfThemBiggerThanFive = nums.some(num => num > 5);

console.log(isAnyOfThemBiggerThanFive); //true
```

Every is kinda picky

```
const nums2 = [2, 4, 5, 6, 7, 119, 222, 50];

const isEveryOfThemBiggerThanFive = nums2.every(num => num > 5);

console.log(isEveryOfThemBiggerThanFive);// false
```

- Sort is another array method, it helps us to sort arrays but by default it converts array elements to string, that is why we face unexpected result. If we want it as we wanted, we have to give compare function to work like below example.
  For more visit MDN

```
const nums = [2, 4, 5, 6, 7, 119, 222, 50];

const sorted = nums.sort((num1, num2) => num1 - num2);
console.log(sorted);//[2, 4, 5, 6, 7, 50, 119, 222]

```

- Reduce is one of most important array methods. And it is a little bit differnt than others, because at the end it return one value, not boolean not array.
  Let's start simple.

```
const nums = [2, 4, 5, 6, 7,];

const reduced = nums.reduce((acc, currVal) => acc + currVal);
console.log(reduced); //24

```

But we can do more than sum the elements of array. for example we can find max value of array.

```
const nums = [2, 4, 5, 6, 7];

const max = nums.reduce((max, currVal) => {
  if (max > currVal) {
    return max;
  }
  return currVal;
});
console.log(max); //7
```

or other way arround but the same reslt.

```
const nums = [2, 4, 5, 6, 7];

const max = nums.reduce((max, currVal) => {
  if (max < currVal) {
    return currVal;
  }
  return max;
});
console.log(max); //7
```

When we don't give any second element to reduce fucntion, it takes first element of array as a initial value acc but if we give it will take with that and first element of array would be current val in first cycle.

```
const nums = [2, 4, 5, 6, 7];

const reduced = nums.reduce((acc, currVal) => acc + currVal, 10);
console.log(reduced); //34
```

- We can also use Object as a acc. Exanple below

```
const votes = ['Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes', 'No'];

const resultOfReduce = votes.reduce((obj, cur) => {
  if (obj[cur]) {
    obj[cur]++;
  } else {
    obj[cur] = 1;
  }
  return obj;
}, {});

console.log(resultOfReduce); // {Yes: 5, No: 4}
```

#### Slice method

Slice is used to create copy of array while not modifie the original array and it returns new created array.

```
array.slice(from, until);
```

Be careful that second argument is not include last element of array if we started from 0 it finishes in 3 with array indexs.

```
const votes = ['1', '2', '3', 'No', 'No', 'Yes', 'No', 'Yes', 'No'];
const array2 = votes.slice(0, 4);
console.log(array2); //[ "1", "2", "3", "No" ]
```

#### Splice method

Splice method is used to remove or to add array elements. It also modifie original array.
In here first argument represent where the removing will start, second how many items.

- removing with Splice

```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, 2);
console.log(removedArray); //[ "1", "2" ]
console.log(votes); //[ "3", "4", "5", "6", "7", "8", "9"]
```

if we don't define second argument, it will be removed untill the end from first argument.

```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0);
console.log(removedArray); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
console.log(votes); //[]
```

- adding with Splice

```
array.splice(index, number of elements, element, element);
```

From the examples below yo can understand how it works.

```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, 2, '3', '4');
console.log(removedArray); //[ "1", "2" ]
console.log(votes); //[ "3", "4", "3", "4", "5", "6", "7", "8", "9" ]
```

```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, 0, '-1', '0');
console.log(removedArray); //[]
console.log(votes); //[ "-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", … ]
```

```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedArray = votes.splice(0, votes.length, '-1', '0');
console.log(removedArray); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
console.log(votes); //[ "-1", "0" ]
```

## Split method
Split method is used to convert strings to array for that we need to have string and we can apply split on it in the example like below:
```
const votes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const votesString = votes.toString();
const array = votesString.split(',', 4);
console.log(array); //[ "1", "2", "3", "4" ]
console.log(votesString); //'1,2,3,4,5,6,7,8,9'
console.log(votes); //[ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
```
