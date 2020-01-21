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

But this is not only it, This may change depends on how we call it or context of invocation. Below code we see this refer to window, Because function is called differently.
We invoked the code from window.

```
const car = {
  name: 'My Car',
  start() {
    console.log(this);
  }
};
const startCar = car.start;

startCar(); //window
```

This in arrow functions are totally different. With arrow functions don't matter how we called it, it always refer to window object or parent object.

```
const car = {
  name: 'My Car',
  start() {
    console.log(this);
  },
  stop: () => {
    console.log(this);
  }
};

const stopCar = car.stop;
car.stop();
stopCar(); //window
```

Key notes about this.

1. Whenever we call function by using window object methods (like setinterval, settimeout etc) which holds this inside, this refer window because window object call it not us.
