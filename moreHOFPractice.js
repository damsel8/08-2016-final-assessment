/* MORE HIGHER ORDER PRACTICE

1. Pretend you've downloaded a library, and it comes with a function called 'find'.

You look up the documentation for that library online, and here's what it says about 'find':

find(list, predicate)

'find' takes in a list and a predicate (a callback) as parameters. It looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

Write an example of how you would call 'find', passing in whatever truth test you'd like and whatever sample list you want to make up. Write as a comment what you expect your example would return.

my code: // expect to produce an array of [3]

var list = [40, 34, 3, 39, 24]

var find = filterBy(collection, function(element){
	var result = [];
	if(element % 3 === 0) 
		 {return true;}
		})
	
	result.push(element);


find(list);
console.log (find(list));





2. Here is a higher-order function defined for you:
var uniq = function(array) {		//this is a global variable assigning the 
									//entire function to the variable uniq
  return array.filter(function(element, index){  //the array will be filtered
  										// and the element, index are parameters of the filter function
    var state = false;					//default state is set to be false
    for (var j=0; j < index; j++){		//the for loop iterates thru the array
      if (array[j] === element){		//if the input index matches the current 
      								    // element in the array, the state overrides to true
        state = true;
      }
    }
    return state === false;				//otherwise the state is false
  });
};


a) Add pseudo code comments to the code above, explaining what each line is doing


b) What does this function return? (a string, an object, a boolean, etc.)

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


c) What does the callback to this function return? (a string, an object, a boolean, etc.)  a boolean (true or false)


d) In english, explain how this function works, as documentation would (see the 'find' problem description as an example). For example, include what it takes as parameters, what it does in words, and what it would return.
describe:  it takes as parameters the elements of the array, and an input index no. chosen by the user.  It loops thru each element, checking to see if it matches the input index, and if so, changes the value of state from false to true.
But since the last line says to return state === false, if state earlier had been
true (because of a match), then the output would be TRUE or FALSE. 
	- FALSE if state === false is true
	- TRUE if state === false is not true


3. Write a function 'reject', which takes in an array, and passes each element and index of the array into a callback function. Return an array of just the elements for which the callback returned false.

var reject = filterBy(array, function(element, index){
		var state = false;
		if(element%2 === 1)
		{return true;
		}
		return state;	
}) 



*/ 
