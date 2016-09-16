/*

var toolbelt = {};

1. add a method to the toolbelt object (defined above for you) that takes in an array, and passes each element and index of the array into a callback function.

var toolbelt.loop = function(array, callback(element, index){
	  for (var i = 0; i< array.length; i++){
	          callback(array[i], i)
			  }
})


Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
      nothing
     
-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)
  
b) What does the callback to this function return? (a string, an object, a boolean, etc.)

     it does not return anything since it's just looping


2. add a method to the toolbelt object that takes in an array, passes each element and index of the array into a callback function, and returns an array with the results of each call to the callback function.

	var toolbelt.transform = function(array, callback(element, index){
	  var results = [];
	  for (var i = 0; i< array.length; i++){
	          results.push(callback(element))
			  }
	})



Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
			  a new array

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)
			
			since it transforms EACH element of the array, it will
			have the exact # of elements in the array as in the original array		

b) What does the callback to this function return? (a string, an object, a boolean, etc.)

			 the callback pushes the transformed elements into a new array,
			 so an array 	

3. add a method to the toolbelt object that takes in an array, and passes each element and index of the array into a callback function. Return an array of just the elements for which the callback returned true.

    toolbelt.filterBy = function(array, function(element, index){
			 if (element % 2 !== 0){
				return true;
				else {return false};
			 }
    })


Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
		  
		  a Boolean (True or False)

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)


b) What does the callback to this function return? (a string, an object, a boolean, etc.) Boolean   



4. add a method to the toolbelt object that takes in an array and returns an accumulation of the elements in the array. The method takes in three parameters: the array, the callback, and whatever you want to initialize the accumulator at. The function should loop through the array, and for each element, redefine the accumulator to whatever the callback returns. You should pass into the callback the accumulator itself and the element. The function should return the accumulator.

    toolbelt.distill = function(startValue, currValue, index){
			startValue = 0 || null;
			toolbelt.loop 
			startValue = startValue + currValue;
    }
	return startValue;
}
Questions:
a) What does this function return? (a string, an object, a boolean, etc.)
       
       depends.  Can return an integer/number, or an object or string

-- if it returns an array, how long will that array be? (either an exact number if it's the same each time, or a range if it's not)
		
		one element 

b) What does the callback to this function return? (a string, an object, a boolean, etc.)

		an integer, number, or an object or string

*/