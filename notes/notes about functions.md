There are 2 way of define functions.

- function declerations(statements).

```
function sayhello() {
  console.log('hello');
}/* without parametr */

function sayHelloWithName(name) {
  console.log('hello ' + name);
}/* with parametr */

sayhello()
sayHelloWithName('Abdulla')/* with argument */
```

##### Return

return is keyword in js, by that we can use function to assign its value to
variable or to use that value in another function.

```
function add(a, b) {
  return a + b;
}
const addedvalue = add(4, 5); /* we can do that becuase
we return */

function add(a, b) {
  console.log(a + b);
}
const addedvalue = add(4, 5); /* we can not do that becuase
  we are not returning */

```

we can only have 1 return in function, the code after return will be unuseful.
Only if we have if statements, we can have more than 1 return. and when function face with return, function stops.

This syntax is also popular

```
function isAppple(fruit) {
  return fruit.toLowerCase() === 'apple';
}
```

- function expressions.

when we define functions and assign them to variables, we define them as a function expression. To name them is not obligatiory. We still can but it won't work to call them withn that name

```
const sum = function (a, b) {
  return a + b;
};
sum(1, 5)
```

###### Functions are objects.

Keep in mind that functions are objects and we can use them in array, in object, we can call from array. As long as we have reference to function.

```
Array[1](5,6)
```

Functions also can be parametr for other functions

```
function sayHello() {
  console.log('hello');
}
function sayHelloMyname(name) {
  console.log(name);
}

function sayHellothereTimes(funct) {
  funct();
  funct();
  funct();
}

sayHellothereTimes(sayHello);
sayHellothereTimes(() => sayHelloMyname('Walter'));
// sayHellothereTimes(sayHelloMyname('Walter')); //we cannot do this because it will be called
// and the argument which we pass won't be function anymore
```
