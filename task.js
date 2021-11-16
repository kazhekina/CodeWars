// 1

// function opposite(number) {
//   return number - (number * 2)
//  }


//  2
 
//  function lovefunc(flower1, flower2){ 
//   let f1 = flower1 % 2
//   let f2 = flower2 % 2
//   if (f1 === f2) {
//     return false
//   } else {
//     return true
//   }
// }


// 3

// function validateCode (code) {
//   let cod = code.toString()
//   switch (cod[0]) {
//   case "1":
//   return true
//   break;
//   case "2":
//   return true
//   break;
//   case "3":
//   return true
//   break;
//   default:
//   return false
//   }
// }


// 4

// const find = (a, e) => a.indexOf(e) < 0 ? "Not found" : a.indexOf(e)


// 5

// const quarterOf = (month) => {
//   m = Math.ceil(month/3)
//   switch (m) {
//   case 1:
//   return 1
//   break;
//   case 2:
//   return 2
//   break;
//   case 3:
//   return 3
//   break;
//   default:
//   return 4
//   }
// }
// console.log(quarterOf(7))


// 6

// function findLongest(str) {
  
//   var spl = str.split(" ");
//   var longest = 0
  
//   for (var i = 0; i < spl.length; i++ ) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length
//      }
//   }
//     return longest
// }


// 7

// function between(a, b) {
//     let arr = []
//     for (let i=a; i<=b; i++) {
//       arr.push(i)
//     }
//     return arr
//   }


//   8
  
//   function greet() {
//     return "hello world!"
//   }


//   9
  
//   function square (arg) {
//     return arg * arg
//   }


//   10
  
//   function remainder(a, b){ 
//     if(a >= b) {
//       return a % b
//     } else {
//       return b % a
//     }
//   }


//   11
  
//   var summation = function (num) {
//      var sum = 0
//      for (i = 1; i <= num; i++) {
//        sum += i
//      }
//      return sum 
//   }


//   12
  
//   function litres(time) {
//     return Math.floor(time * 0.5);
//   }


//   13
  
//   var a = "code";
//   var b = "wa.rs";
//   var name = a + b;


//   14
  
//   function peopleWithAgeDrink(old) {
//     if (old < 14) {
//     return 'drink toddy'
//     } else if (old < 18) {
//       return 'drink coke'
//           } else if (old < 21) {
//             return 'drink beer'
//                 } else {
//                   return 'drink whisky'
//                 }
//   }


//   15
  
//   function longest(s1, s2) {
//     let string = s1 + s2
//     let arr = string.split("")
//     let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result.sort().join("")
// }


