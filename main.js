// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// const SECRET ="123";
// let guess = prompt("enter the secret code...");
// while(guess !== SECRET){
//     guess = prompt("enter the secret code...");
// }
// console.log("congrats!!!");

// let input = prompt("Hey, say something!");
// while (true){
//     input = prompt(input);
//     if(input === "stop copying me"){
//         break
//     }
// }
// console.log("oK You WIn");



// let maximum = parseInt(prompt("Enter the maximum number!"));
// while(!maximum){
//     maximum = parseInt(prompt("Enter the maximum number!"));
// }
// const targetNum = Math.floor(Math.random()*maximum)+1;
// console.log(targetNum);

// let guess = parseInt(prompt("enter your first guess!"));
// let attemps = 1;

// while(guess !== targetNum){
//     attemps++;
//     if(guess > targetNum){
//         guess = parseInt(prompt("TOO HIGH"));
//     }else{
//         guess = parseInt(prompt("TOO LOW"));
//     }
// }
// console.log(`YOU GOT IT, it took you ${attemps} guesses`);


//First question
const targetNum = 'Putri';
console.log(targetNum);

let attempts = 1; 
let guess = prompt("What's my last name??");

while (guess !== targetNum && guess !== 'putri') {
    attempts++;
    guess = prompt("What's my last name?? ANSWERRRR");
}
console.log(`YOU GOT IT, it took you ${attempts} guesses`);

//Next question
const target = 'electics';
const target2 = 'ELECTICS';
console.log(target); 

let attemptss = 1; 
let guesss = prompt("What's my faculty??");

while (guesss !== target && guesss !== target2) {
    attemptss++;
    guesss = prompt("What's my faculty?? be frrr");
}
console.log(`YOU GOT IT, it took you ${attemptss} guesses`);
if ((guess === targetNum || guess.toLowerCase() === 'putri') && guesss.toLowerCase() === target) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h3>Congratulations!!!!!</h3>";
}
