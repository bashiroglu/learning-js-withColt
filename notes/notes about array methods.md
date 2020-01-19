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
