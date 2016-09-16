/* GENERAL JS KNOWLEDGE QUESTIONS:

// ARRAYS
1. How do you access the third item in an array?
 nameofarray[2]

2. How do you loop through an array?
 for (var i=0; i< array.length; i++)

// OBJECTS
1. What are the two ways you can access a particular key in an object? When do you use which and why?
a) object.key    b) object[key]

2. How do you loop through an object?
   for (var key in object)

3. What is a method?
  a method is a function on a function (tells the function how to behave)
  such as toolbelt.transform 

// MISC
1. What operator would you use in a conditional to represent 'OR' and what operator would you use to represent 'AND'?
	|| (for or)   && (for and)


2. What is the difference between '=' and '==='?
  the first one is an assignment operator, where it assigns the item to the left
  of the equals sign to the value on the right of the equals sign.

  The === (three-equals sign) says one thing is exactly equal to another,
  for example, 6 / 2 === 3


3. What are the data types in JavaScript? 
   boolean, null, undefined, object, array, string

4. a) What is scope?

  Scope helps separate functionality in code.
  scope can be local or global
  local scope is in the "child scope" and is found w/in the BODY of a function only.  Global scope is outside function and is called the "parent scope."

b) What happens if you try to call a variable that's defined in the parent scope from within the child scope?  it will be able to call it 

c) What happens if you try to call a variable that's defined in the child scope within the parent scope?  it will return undefined


// PSEUDOCODE
WITHOUT writing actual code, please write your pseudocode to demonstrate the steps you would take to solve this problem:

Prompt 1: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if EVERY number in the array is even, and false otherwise.

//Loop thru or iterate thru the elements of the array using a for loop.
//write a predicate that has a conditional with the if statement asking if 
// each element is even, and return false if it hits an odd number.

// The first odd number will turn the Boolean to false, and indicate that no, every no. in the array is NOT even.  If it does not hit a non-even number, it will iterate thru the entire array and return TRUE.

Prompt 2: create a function that takes in an array of numbers as a parameter, iterates through the array, and returns true if ANY number in the array is even, and false otherwise.

//use loop to iterate thru the array of no's.
// set the global var state equal to TRUE. 
// in the local function, make a conditional if statement that 
if an element in the array is EVEN, the default TRUE will be true.
else, return false. (an odd number exists)



