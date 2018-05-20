# JSON APIs and Ajax

## Trigger Click Events with jQuery

In this section, we'll learn how to get data from APIs. APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.

We'll also learn how to update HTML with the data we get from these APIs using a technology called Ajax.

First, let's review what the `$(document).ready()` function does. This function runs such that all of the code inside of it executes only once our page has finished loading.

So Let's start by implementing a `click event handler` inside of our `$(document).ready()` function by adding this code:

```js
$("#getMessage").on("click", function(){

});
```
After completing this, proceed to the next challenge where we will make our "Get Message" button change the text of the element with the class `message`.