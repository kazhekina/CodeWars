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


// 16

// function XO(str) {
//   let arr = str.toLowerCase().split("")
//   let sumX = 0
//   let sumO = 0
//   for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "x") {
//     sumX += 1
//   } 
//   if (arr[i] === "o") {
//     sumO += 1
//   }
// }
//   if (sumX === sumO) {
//     return true
//   } else {
//     return false
//   }
// }


// 17

// function maxBall(v0) {
//   v0 = v0 * 1000 / 3600
//   let g = 9.81
//   let t = 0
//   let h = 0
//   let maxH = 0
//   let arr = []
//   let index = 0
//   do {
//     arr.push("(" +(t*10).toFixed(0) + ", " + h.toFixed(3) +")")
//     // arr.push(h.toFixed(3))
//     t += 0.1
//     h = v0 * t - 0.5 * g * t * t  
//   } while (h > 0)
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > maxH) {
//      maxH = arr[i]
//      index = arr.indexOf(maxH)
//    }
//  }
//   return arr
// }

// console.log(maxBall(15))


// 18

// function rentalCarCost(d) {
//   let rent = 40
//   let sum = 0
//   if (d >= 7) {
//     sum = (rent * d)-50
//   } else if (d >= 3 && d < 7){
//     sum = (rent * d)-20
//   } else {
//     sum = (rent * d)
//   }
//   return sum 
// }

