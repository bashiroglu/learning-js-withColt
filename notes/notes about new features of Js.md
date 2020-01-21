We can pass default value to our parametrs. As below. But remember that order matter, put the value with default value to the end.

```
function sayHi(greetingWord, name = 'Walter') {
  console.log(`${greetingWord} ${name}`);
}
sayHi('hello'); //hello Walter
sayHi('hello', 'John'); // hello John
```

- Spread operator is one of new JS features. We use it for different purposes.

1. we use to spread array to function as params.

```
const names = ['Azer', 'Torgul', 'Turgut', 'Ulvi'];

function SayTheirNames(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

}

SayTheirNames(...names);
  /* Azer
 Torgul
 Turgut
 Ulvi */

SayTheirNames(names); /* ["Azer", "Torgul", "Turgut", "Ulvi"]
undefined
undefined
undefined */ // this is logged because function expect strings, not array
```

2. we can use it to join arrays or to copy one array to another by spreading its elements to another array.

```
const array1 = [1, 2, 3, 4];
const array2 = [...array1];
const array3 = [...array1, ...array2];
console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]
console.log(array3); // [1, 2, 3, 4, 1, 2, 3, 4]

```

3. we can use it not only with arrays also with objects

```
const obj1 = {
  color: 'blue',
  engine: '2300'
};
const obj2 = {
  ...obj1,
  price: 4000
};
console.log(obj1); //{color: "blue", engine: "2300"}
console.log(obj2); //{color: "blue", engine: "2300", price: 4000}
```

Remmeber that when we add another property to new obj which is exist in obj which we are spreading, in that case property will be overwrite by the one which is added later.

```
const obj1 = {
  color: 'blue',
  engine: '2300'
};
const obj2 = {
  ...obj1,
  engine: '4000'
};
console.log(obj1); //{color: "blue", engine: "2300"}
console.log(obj2); //{color: "blue", engine: "4000"}

```

These last 2 is very important because it allow us to copy object and arrays in real meaning.

- Rest operator help us to handle unknown counted parametrs. We can get rest params(rest of our defined) in array.

```
function sayNames(a, b, ...rest) {
  console.log(a); // Azer
  console.log(b); // Torgul
  console.log(rest); // ["Turgut", "Ulvi"]
  console.log(...rest); // Turgut Ulvi
}

sayNames('Azer', 'Torgul', 'Turgut', 'Ulvi');

```

- Destructuring of Arrays and Objects. This is new way of getting assign property values of Objects or arrays. This is used especially to destructure arrrays or objects as arguments in functions.

for arrays

```
const [first, second] = [1, 2];
console.log(first);
console.log(second);
```

for objects

```
const { color, engine } = { color: 'blue', engine: 2300 };
console.log(color);
console.log(engine);
```

mixed. This type destructuring called nested.

```
const {
  features: [transmission, speaker]
} = {
  color: 'blue',
  engine: 2300,
  features: ['automatic', 'ubl speaker']
};
console.log(transmission); //'automatic'
console.log(speaker);//'ubl speaker'
```
