# Function
~~~
A function is a process which takes some input, called arguments, and produces some output called a return value.
function type
mapping= input call arguments=>function=>return value/output

Procedures= sequence of steps is know as procedures programming.
I/O= Other part of commincation such as screen, storage, system logs, or network that is called I/o .

Mapping
 A function will take the inputs and return the corresponding output.

 pure function =
Given the same input, will always return the same output.
Pure functions take some input and return some output based on that input. 
They are the simplest reusable building blocks of code in a program. 

~~~
Closure=
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state .
outer function’s scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time.

 The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
~~~

 A promise is an object that may produce a single value some time in the future:
 A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

~~~
# Pure Function
The same input always returns the same output.
Has no side effects
Relies on no external mutable state.
~~~

# Mutable 
~~~
Mutable is a type of variable that can be changed.
 In JavaScript, only objects and arrays are mutable, not primitive values.
You can make a variable name point to a new value, but the previous value is still held in memory. 
String and Numbers are Immutable.
~~~
# Question
What does mutable mean?
Option
Changeable(ANS)
Unchangeable
Constantly changing
Random
~~~

Why write pure functions?
best reason :
programs that achieve clean lines between areas of responsibility have less errors.
code of line found less error. 


~~~
# Higher Order Functions
higher order function accepts a function as an argument OR
returns a function.
~~~

# Function Iteration
four commonly used higher-order functions designed for arrays— 
forEach
map
filter
reduce

map 
Creates a new array that's the same size as the original array.
Applies a function to each element of the original array.
Pushes the return value of the function into the new array

# filter
Creates a new array that's no larger than the original array.
Applies a function to each element of the original array.
Pushes the element into the new array if the function returns true.
~~~





