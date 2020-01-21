- This is the keyword in JS used in objects.

Before that remeber that when we declare variable in in global with var, it appear in window but not with let and const.

Back to this. When we refer or log this inside of global scope, it will log or refer window object.

```
function works() {
  console.log(this);
}

works(); //window object

```

But when we use this inside of object we refer object itself.

```
const car = {
name: 'My Car',
start() {
console.log(this);
}
};
car.start(); // Car object //{name: "My Car", start: ƒ}
```

We mainly use this to do something with objects.

```
const car = {
  name: 'My Car',
  start() {
    return this.name + ' started';
  }
};

console.log(car.start()); //My Car started
```
