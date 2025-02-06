//  For , While and Do-While loop //

// for ( let i=0;i<50;i++){
// console.log(i+1)
// }

// <------------------------------------------------------->

// let num = 2;
// while(num<100){
//     console.log(num);
//     num = num + 2;
// }

// <----------------------------------------------------------------->

// let N = parseInt(prompt("Enter a number: "));
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum += i;
// }

// console.log( N, "natural numbers is:", sum);

// <-------------------------------------------------------------->


// let num = 54321;                    // doubt
// for(let i = num.length-1; i>=0 ;i--){
//     console.log(num[i])
// }


// <----------------------------------------------------------------->

// function isPrime(num) {
//     if (num < 2) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) { 
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// let num = parseInt(prompt("Enter a number: "));

// if (isPrime(num)) {
//     console.log(num + " is a prime number.");
// } else {
//     console.log(num + " is not a prime number.");
// }


// <----------------------------------------------------------------->
// Logical operators//

// function isRange(num,lower,upper){
//     return (num>=lower &&num<=upper)

// }

// let num = parseInt(prompt("Enter a number: "));
// let lower = 10;
// let upper = 100;
// if (isRange(num, lower, upper)) {
//     console.log(num + " is in the range " + lower + " to " + upper + ".");
// } else {
//     console.log(num + " is out of range.");
// }

// <--------------------------------------------------------------->

// AND 

// var age1 = 18;
// var age2 = 200;

// let age = prompt("ENter your age");
// if(age1 >= 18 && age2 >= 18 && age >= 18 ){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// <------------------------------------------------------------------------>
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is a Leap Year.");
//     } else {
//         console.log(year + " is NOT a Leap Year.");
//     }
// }
//<---------------------------------------------------------------->
// let zero= prompt("Enter Number :");
// if (zero>=0 && zero<=0) {
//             console.log(zero +"is zero");
//         } else {
//             console.log(zero + " is Negative Number");
//         }

//<---------------------------------------------------------->
// let Login = prompt("enter your password")
// function login(username, password) {
//     const validUsername = "admin";
//     const validPassword = "12345";

//     if (username === validUsername && password === validPassword) {
//         console.log("Login Successful! ");
//     } else {
//         console.log(" Incorrect password.");
//     }
// }

//<------------------------------------------------------------------>


// function factorial(n) {
//     let fact = 1;
    
//     for (let i = 1; i <= n; i++) {
//         fact *= i; 
//     }

//     return fact;
// }
// console.log(factorial(5));  

//<---------------------------------------------------------------------->

// function fibonacci(n) {
//     let a = 0, b = 1, count = 0;
    
//     while (count < n) {
//         console.log(a);  
//         let temp = a + b; 
//         a = b;  
//         b = temp;  
//         count++;  
//     }
// }
// fibonacci(10);

//<------------------------------------------------------------------------->
// function findLargestAndSmallest(arr) {
//     if (arr.length === 0) {
//         console.log("Array is empty.");
//         return;
//     }

//     let maxNum = arr[0];
//     let minNum = arr[0]; 

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i]; 
//         }
//         if (arr[i] < minNum) {
//             minNum = arr[i]; 
//         }
//     }

//     console.log(`Largest Number: ${maxNum}`);
//     console.log(`Smallest Number: ${minNum}`);
// }

// let numbers = [12, 45, 2, 67, 89, -10, 34, 0];
// findLargestAndSmallest(numbers);

//<--------------------------------------------------------------------->


// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU"; 

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) { 
//             count++;
//         }
//     }

//     console.log(`Total Vowels: ${count}`);
// }

// countVowels("Hello World!"); 
// countVowels("JavaScript");    
// countVowels("AEIOU");         
// countVowels("xyz");           

//<------------------------------------------------------------------------>

// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let stars = ''; 
//         for (let j = 1; j <= i; j++) { 
//             stars += '*'; 
//         }
//         console.log(stars); 
//     }
// }

// printTriangle(5);

//<------------------------------------------------------------------------>
// Functions

// function square(number) {
//     return number * number; 
// }

// console.log(square(4));  
// console.log(square(10)); 

//<--------------------------------------------------------------------->
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 5/5) + 32;  
// }
// console.log(celsiusToFahrenheit(0));   
// console.log(celsiusToFahrenheit(100)); 

//<------------------------------------------------------------------------->

// function findGreatest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;  
//     } else if (b >= a && b >= c) {
//         return b;  
//     } else {
//         return c;  
//     }
// }

// console.log(findGreatest(4, 10, 7));  

//<------------------------------------------------------------------------>

// function reverseString(str) {
//     return str.split('').reverse().join('');  
// }

// console.log(reverseString("hello"));  


