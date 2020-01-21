- Functions inside of objects called methods.

```
const car = {
  startEngine: function works() {
    console.log('engine started');
  },
  stopengine: () => {
    console.log('stops');
  }
};
car.startEngine(); //engine started
car.stopengine(); // stops
```

there is also another short way of defining methods.

```
const car = {
  works() {
    console.log('engine started');
  }
};
car.startEngine(); //engine started
```



