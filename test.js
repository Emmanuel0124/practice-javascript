// var myVariable = 3;

// console.log(myVariable);



// var monkeysJumping = 5;

// console.log(monkeysJumping);



// var wordsExample = ["pink", "marshmallows"];
// console.log(wordsExample);

//  Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def selectEvenItems(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p selectEvenItems(["a", "b", "c", "d", "e", "f"])



function selectEvenItems(string) {
  var result = [];
  var index = 0;
  while (index < string.length) {
    if (index % 2 === 0) {
      result.push(string[index]);
    }
    index++;
  }
  return result;
}
console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));




// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])


