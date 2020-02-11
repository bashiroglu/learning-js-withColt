## Prototype

Every array, object we create have access to prototype object via "**proto**" property and there are some methods in there, by thoso can use array methdods or object methods. In order to see or add any method prototype itself, we can access Array.prototype. Array is Object which all arrays are instances of it.

#### Constructor functions

We can also define functions which creates object, this functions called constructor functions and it is convention to call them with Capital letters. they basically create object and this keyword inside of that function refer to new created function which will be returned at the end. And after this function we can access and add function its prototype as many as we want.

```
FunctionName.prototype.rgba= function(){
    // do somwthing
}
```

#### Syntactical sugar for Constructor functions

This way is called class and we just replicate the same function but with different methods.
We can also use other features of class, such as extends, super etc. 

```
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  sayCar() {
    console.log(`${this.make}_${this.model}`);

    return `${this.make}_${this.model}`;
  }
}
const bmw = new Car('bmw', '320');
bmw.sayCar();
```
