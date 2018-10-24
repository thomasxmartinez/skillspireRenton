const monthlyGrocery = 500;

const yearlyGrocery = monthlyGrocery * 12;

console.log(yearlyGrocery);

//Boolean is a true or false

let apple = true;
console.log(apple);
let carrots = false;
console.log(carrots);


//String and template literal
const myName = "Thomas";
const lastName = "Martinez"

const sentence = "Hello " + myName + " " + lastName + "! How are you?!";
const sentenceTemplateLiteral = `Hello ${myName} ${lastName}! How are you?!`;
console.log(sentence);
console.log(sentenceWithTemplate);

const roundEarth = true;

if (roundEarth) {
    console.log("this is the truth")
} else {
    console.log("flat earther")
}


if (3 + 5 === 8){
    console.log("this is the math portion of the class")
} else {
    console.log("I was told there would be no math")
}


"4" = 4; //assignment

"4" == 4 //values

"4" === 4 //strict equals checks type

// !== does not equal

// <=
// >=
// <
// >

const friendsAtSkillspire = 10;

if (friendsAtSkillspire === 0) {
    console.log("awesome sauce, i hope nobody is sick");
} else if (friendsAtSkillspire >= 4) {
    console.log("cool lets play mario party")
} else {
    console.log("great lets have a party")
}


//loops
let friendsAtSkillspire = 0;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
friendsAtSkillspire = friendsAtSkillspire + 1;
console.log(friendsAtSkillspire);

let friendsAtSkillspire = 0;
while (friendsAtSkillspire < 10){
    friendsAtSkillspire = friendsAtSkillspire +1;
}
console.log(friendsAtSkillspire);