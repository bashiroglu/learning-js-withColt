# Scopes

Scope is in concept of place where we can access to some variables, to some we don't
based on condition.

###### Function scope

```
function sayhello() {
  let myName = 'Abdulla';
  const myName1 = 'Abdulla';
  var myName2 = 'Abdulla';
  console.log(myName);
}
sayhello();

console.log(
  myName
); /* we don't have access to this variable
 here because of functional scope*/
console.log(
  myName1
); /* we don't have access to this variable
here because of functional scope*/
console.log(
  myName2
); /* we don't have access to this variable
here because of functional scope*/
```

###### Block scope

with let and const we don't have acces to variables which is defined inside of block scope

```
if (true) {
  let myName = 'Abdulla';
  console.log(myName);
}
console.log(myName); /* with let and const we don't have access myName var */
```

with var we do have acces to variables which is defined inside of block scope surprisingly

```
if (true) {
  let myName = 'Abdulla';
  console.log(myName);
}
console.log(myName); /* with let and const we don't have access myName var */
```

###### Lexical scope

When we have many functions inside of each-other, we in fucntions can access all variables of all outer functions, including global scope.

```
function sayMyName() {
  let hisName = 'Walter';
  function sayHisName() {
    console.log(hisName); /* we have access hisName */
  }
  sayHisName();
}

sayMyName();

```

But not vice-versa

```
function sayMyName() {
  let hisName = 'Walter';
  function sayHisName() {
    console.log(hisName); /* we have access hisName */
  }
  sayHisName();
}
sayMyName();

console.log(hisName); /*but we do not have access hisName in here*/

```

- Hosting is the concept of how JS treat variables.

When we execute below code. we print "undefined"

```
console.log(car);
let car = 'BMW'; // this won't work because of let and const is not hoisted
// error message = ReferenceError: Cannot access 'car' before initialization

```

But with var it works.

```
console.log(car);
var car = 'BMW'; // this works because variables with var is hoisted
// undefined

```

in this case we can treat the code like below

```
var car;

console.log(car);
car = 'BMW'; // this works because variables with var is hoisted
// undefined
console.log(car); //BMW
```
