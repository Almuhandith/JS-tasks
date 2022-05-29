//Question One
document.querySelector(".team").innerHTML = "Group-name: Team-Artemis";
document.querySelector(".team").style.color = "teal";
document.querySelector(".tm").innerHTML = "Team Members";



//Question Two
const artemis = ["Merit", "Abdulsamad", "Comely", "Emmanuel", "Gabriel", "Ayobami", "Danny"];
console.log(artemis[1]);

//Question Three
const person = {
    firstName: "Abdulsamad",
    lastName: "Raji",
    bestMovie: "Originals",
    bestFood: "Fried yam",
    Complexion: "Dark",
    birthMonth: "October",
    State: "Kwara",
    groupName: "Artemis",
};

console.log(person.bestMovie);

//Question Four
const Noun = "Abdulsamad";
const Adjective = "handsome";
const Verb = "drove";
// const Adverb = "quickly";

console.log(`${Noun} ${Verb} quickly`);
console.log(`${Noun} is a ${Adjective} man`);
console.log(`I ran towards ${Noun} `);
console.log(`I ${Verb} towards the ${Adjective} man`);

//Question Five
function remainder(a,b) {
    return a % b    
};

console.log(remainder(5,2))

//Question Six
function quadraticFormula(a,b,c) {
    var result1 = (((-1*b) + Math.sqrt(b**2) - (4*a*c))/(2*a));
    var result2 = (((-1*b) - Math.sqrt(b**2) - (4*a*c))/(2*a));
    
    return result1 + " or " + result2;
};

console.log(quadraticFormula(5,3,7))

//Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The"

console.log(`${wordBlanks} ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}`)

//Question 8
const pi = 3.142;
function area(r) {
    return pi * r**2
};

console.log(area(9));

//Question 9
function SI(P,R,T) {
    return (P*R*T)/(100)
};

console.log(SI(8200,17.5,2.5))

//Question 10
console.log(10 % 4);

//Question 11
//First data
let meritMass1 = 78;
let meritHeight1 = 1.69;

let meritBMI1 = meritMass1/(meritHeight1**2);
console.log(meritBMI1);

let nutjobMass1 = 92;
let nutjobHeight1 = 1.95;

let nutjobBMI1 = nutjobMass1/(nutjobHeight1**2);
console.log(nutjobBMI1);

let meritHigherBMI1 =  meritBMI1 > nutjobBMI1;
console.log(meritHigherBMI1);


let meritMass2 = 85;
let meritHeight2 = 1.76;

let meritBMI2 = meritMass2/(meritHeight2**2);
console.log(meritBMI2);

let nutjobMass2 = 95;
let nutjobHeight2 = 1.88;

let nutjobBMI2 = nutjobMass2/(nutjobHeight2**2);
console.log(nutjobBMI2);

let meritHigherBMI2 =  meritBMI2 > nutjobBMI2;
console.log(meritHigherBMI2);