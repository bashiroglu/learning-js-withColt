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
