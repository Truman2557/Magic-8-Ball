//html prompts
let question = prompt("ask your question:");

// variable created and random integer created
let roundMathRandom;
roundMathRandom = Math.floor(Math.random() * 10) + 1;
console.log(roundMathRandom);

if (roundMathRandom === 1){
    console.log("Yes");
} else if (roundMathRandom === 2){
    console.log("No");
} else if (roundMathRandom === 3){
    console.log("It Is Uncertain");
} else if (roundMathRandom === 4){
    console.log("Absolutely");
} else if (roundMathRandom === 5){
    console.log("Almost Certainly");    
} else if (roundMathRandom === 6){
    console.log("Almost Certainly Not");
} else if (roundMathRandom === 7){
    console.log("With Certainty");
} else if (roundMathRandom === 8){
    console.log("Unclear, Try Again");
} else if (roundMathRandom === 9){
    console.log("The Magic Eightball Says It Is Foretold");
} else if (roundMathRandom === 10){
    console.log("Its Not Going To Happen");
}

