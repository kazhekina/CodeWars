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

// 19

// function isDivideBy(number, a, b) { 
//   if(((number % a)===0) && ((number % b)===0)){
//     return true
//   } else {
//     return false
//   }
//  } 

//  20

// function arrayMadness(a, b) {
//   let sumA = 0
//   let sumB = 0
//   let sum = 0
//   sumA = a.reduce((sum, elem) => sum+(elem*elem), 0) 
//   sumB = b.reduce((sum, elem) => sum+(elem*elem*elem), 0) 
   
//   if(sumA > sumB){
//     console.log(sumA, sumB)
//     return true
//   } else {
//     return false
//   }
//  }
//  console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]))
 
// 21

// function dblLinear(n) {
//     console.log(n)
//     let result = [1];
//     let i = 0;
//     let count = 0;
//     while(count <= n){
//         if(result.hasOwnProperty(i)){
//             result[y(result[i])] = y(result[i]);
//             result[z(result[i])] = z(result[i]);
//             count++;
//         }
//         i++;
//     }
//     return result.filter(Boolean)[n];

//     function y(x) {
//         return 2 * x + 1
//     }

//     function z(x) {
//         return 3 * x + 1
//     }
// }

// 22

// const pigIt = (phrase) => {
//     const arrPrase = phrase.split(' ')
//     arrPrase.forEach((el, i) => {
//       if (el[0] !== '!' && el[0] !== ',' && el[0] !== '.' && el[0] !== '?') {
//         const arr = el.split('')
//         const add = arr[0]
//         const newArr = arr.splice(1)
//         newArr.push(add + 'ay')
//         arrPrase[i] = newArr.join('')
//       } 
      
//     })
//     return arrPrase.join(' ')
//   }

//   23

//   function isValidWalk(walk) {
//     if (walk.length !== 10) {
//       return false
//     }
//     console.log(walk)
//     const coords = {
//       'w': 1,
//       'e': -1,
//       'n': 2,
//       's': -2
//     }
//     let result = 0;
//     walk.forEach(el => {
//       result += coords[el]
//     })
//     console.log(result)
//     return result ? false : true;
//   }

//   24

//   function solution(number){
//     let result = 0;
//     if (!number) {
//       return 0
//     }
//     for (let i = 1; i < number; i++) {
//       if (i%3 === 0 || i%5 === 0) {
//         result += i
//         }
//     }
//     return result
//   }

//   25

//   decodeMorse = function(morseCode){
//     const a = morseCode.split(' ')
//     console.log(a)
//     let result = ''
//     if (morseCode === '···−−−···') {
//       result = 'SOS'
//     } else {
//       a.forEach((el, i) => {
//         if (el === '') {
//           if (a[i + 1] !== ''){
//             result += ' '
//           } 
//         } else {
//           result += MORSE_CODE[el]
//         }
//       })
//     }
//     console.log(result.split())
//     return result.trim()
//   }

//   26

//   function isPrime(num) {
//     if (num < 2) {
//        return false;
//     }
//   if (num === 2) {
//        return true;
//     }
    
//     const maximumDividor = Math.sqrt(num) + 1;
//   for (let i = 2; i < maximumDividor; i++) {
//        if (num % i === 0) {
//          return false;
//        }
//     }
//   return true;
//   }

//   27

//   function count (string) {  
//     var strObj = {};
//     var strArr = string.split('');
//     strArr.map(function(element){
//       if (strObj.hasOwnProperty(element)) {
//         strObj[element] = strObj[element] + 1;
//       } else {
//         strObj[element] = 1;
//       }
//     });
//     // The function code should be here
//      return strObj;
//   }

//   28

//   let order = (words) => {
//     let arr = []
//     words.split(' ').forEach((el, i) => {
//        let num;
//        el.split('').forEach(e => {
//          if(!isNaN(+e)){
//           num = e
//          }
//        })
//        arr[num-1] = el
//     })
//     return arr.join(' ')
//   }

//   29

//   function advice(agents, n) {
//     var result = [];
    
//     if (n > 0) {
//       var safestValue = n*2; // Furtherest manhattan distance possible is from corner to corner (n x n)
//       var map = new Array(n).fill().map(() => new Array(n).fill(safestValue)); // Generate intial map with all spots being equally safe
//       var curSafetyValue; 
  
//       agents.forEach((pos, aindex) => {
//         if (pos[0] < n && pos[1] < n) { // Agent fits on map
//           safestValue = 0; // No longer have the change that the whole map is equally safe
//           for(var cx = 0; cx < map.length; cx++) {
//             for(var cy = 0; cy < map[cx].length; cy++) {
//                 curSafetyValue = getDistance(pos, [cx, cy]);
                
//                 if (map[cx][cy] > curSafetyValue) { // Set cell to the lowest safety level found
//                   map[cx][cy] = curSafetyValue;
//                 }
                
//                 if (map[cx][cy] > safestValue) {  // Store the highest safety value found, so we can look up the safest locations later
//                   safestValue = map[cx][cy];
//                 }
//             }
//           }
          
//         }
//       });
//       result = getSafestLocations(safestValue, map);
//     }
    
//     return result;
//   }
  
//   function getDistance(posA, posB) {
//     return Math.abs(posA[0] - posB[0]) + Math.abs(posA[1] - posB[1]);
//   }
  
//   function getSafestLocations(safestValue, map) {
//     var results = [];
//     if (safestValue > 0) {
//       for(var x = 0; x < map.length; x++) {
//         for(var y = 0; y < map[x].length; y++) {
//           if (map[x][y] === safestValue) {
//             results.push([x, y]);
//           }
//         }
//       }
//     }
//     return results; 
//   }

