# Object Oriented and Functional Programming

## Declare JavaScript Objects as Variables

Before we dive into Object Oriented Programming, let's revisit JavaScript objects.

Give your `motorBike` object a `wheels`, `engines` and `seats` attribute and set them to numbers.

```js
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

var motorBike = {
  "wheels": 2,
  "engines": 1,
  "seats": 1
  // Only change code below this line.
};
```

## Construct JavaScript Objects with Functions

We are also able to create objects using `constructor` functions.

A `constructor` function is given a capitalized name to make it clear that it is a `constructor`.

Here's an example of a `constructor` function:

```js
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
```

In a `constructor` the `this` variable refers to the new object being created by the constructor. So when we write,

  `this.wheels = 4;`

inside of the `constructor` we are giving the new object it creates a property called `wheels` with a value of 4.

You can think of a `constructor` as a description for the object it will create.

Have your `MotorBike` `constructor` describe an object with `wheels`, `engines` and `seats` properties and set them to numbers.

```js

```