We can pass default value to our parametrs. As below. But remember that order matter, put the value with default value to the end.

```
function sayHi(greetingWord, name = 'Walter') {
  console.log(`${greetingWord} ${name}`);
}
sayHi('hello'); //hello Walter
sayHi('hello', 'John'); // hello John
```
