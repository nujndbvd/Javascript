// function generateRandomMathQuestions() {
//     let score = 0; 
//     let totalQuestions = 5;

//     for (let i = 1; i <= totalQuestions; i++) {
//         let num1 = Math.floor(Math.random() * 10) + 1; 
//         let num2 = Math.floor(Math.random() * 10) + 1; 
//         let correctAnswer = num1 + num2; 
//         let userAnswer = prompt(`Question ${i}: What is ${num1} + ${num2}?`);
//         if (parseInt(userAnswer) === correctAnswer) {
//             alert(`Correct!`);
//             score++; 
//         } else {
//             alert(`Incorrect! The correct answer is ${correctAnswer}.`);
//         }
//     }
//     alert(`You scored ${score} out of ${totalQuestions}`);
// }
// generateRandomMathQuestions();

//<--------------------------------------------------------------------------->
// function startCountdown() {
//     let seconds = parseInt(prompt("Enter the number of seconds for the countdown:"));

//     if (isNaN(seconds) || seconds <= 0) {
//         alert("Please enter a valid positive number.");
//         return; 
//     }
//     let timer = setInterval(function() {
//         console.log(seconds); 
//         seconds--;
//         if (seconds < 0) {
//             clearInterval(timer);  
//             alert("Time's up!");   
//         }
//     }, 1000); 
// }
// startCountdown();
//<------------------------------------------------------------------------------>
// function getRandomAdvice() {
//     const advices = [
//         "Believe in yourself and all that you are.",
//         "Don't watch the clock; do what it does. Keep going.",
//         "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//     ];
//     const randomIndex = Math.floor(Math.random() * advices.length);
//     const randomAdvice = advices[randomIndex];
//     alert(randomAdvice);
//     let userChoice = confirm("Do you want to get another advice?");
//     if (userChoice) {
//         getRandomAdvice();
//     } else {
//         alert("Goodbye!"); 
//     }
// }
// getRandomAdvice();
//<------------------------------------------------------------------->
// function guessTheNumber() {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     let chances = 5;  
//     let userGuess = 0; 
//     while (chances > 0) {
//         userGuess = parseInt(prompt(`Guess the number (between 1 and 100):\nYou have ${chances} chances left.`));
//         if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//             alert("Please enter a valid number between 1 and 100.");
//             continue; 
//         }
//         if (userGuess === randomNumber) {
//             alert("You won! The correct number was " + randomNumber);
//             return;
//         } else if (userGuess < randomNumber) {
//             alert("Too low! Try again.");
//         } else {
//             alert("Too high! Try again.");
//         }

//         chances--;
//     }
//     alert(`Game over! The correct number was ${randomNumber}`);
// }
// guessTheNumber();
//<-------------------------------------------------------------------->
// function simpleCalculator() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let operator = prompt("Enter the operator (+, -, *, /):");
//     let num2 = parseFloat(prompt("Enter the second number:"));
//     if (isNaN(num1) || isNaN(num2)) {
//         alert("Please enter valid numbers.");
//         return;
//     }

//     let result; 
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 alert("Error: Division by zero is not allowed.");
//                 return;
//             }
//             result = num1 / num2;
//             break;
//         default:
//             alert("Invalid operator. Please enter one of the following: +, -, *, /.");
//             return; 
//     }
//     alert(`The result of ${num1} ${operator} ${num2} is: ${result}`);
// }
// simpleCalculator();
//<------------------------------------------------------------------------------->
function diaryProgram() {
    let entries = []; 
    let running = true;

    while (running) {
        let action = prompt("What would you like to do?\n1. Add a new diary entry\n2. View all diary entries\n3. Exit");
        switch (action) {
            case "1":
                let newEntry = prompt("Write your diary entry:");
                if (newEntry) {
                    entries.push(newEntry); 
                    alert("Your entry has been saved.");
                } else {
                    alert("Entry cannot be empty.");
                }
                break;
            
            case "2":
                if (entries.length === 0) {
                    alert("You have no diary entries yet.");
                } else {
                    let allEntries = "";
                    for (let i = 0; i < entries.length; i++) {
                        allEntries += `Entry ${i + 1}: ${entries[i]}\n\n`;
                    }
                    alert(allEntries);
                }
                break;

            case "3":
                alert("Goodbye! Your diary has been saved.");
                running = false; 
                break;

            default:
                alert("Invalid choice. Please select 1, 2, or 3.");
                break;
        }
    }
}
diaryProgram();
