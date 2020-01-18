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
