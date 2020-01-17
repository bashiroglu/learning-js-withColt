There are 2 way of define functions.

- function decleration.

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
