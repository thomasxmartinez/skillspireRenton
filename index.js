// const monthlyGrocery = 500;

// const yearlyGrocery = monthlyGrocery * 12;

// console.log(yearlyGrocery);

// //Boolean is a true or false

// let apple = true;
// console.log(apple);
// let carrots = false;
// console.log(carrots);


// //String and template literal
// const myName = "Thomas";
// const lastName = "Martinez"

// const sentence = "Hello " + myName + " " + lastName + "! How are you?!";
// const sentenceTemplateLiteral = `Hello ${myName} ${lastName}! How are you?!`;
// console.log(sentence);
// console.log(sentenceWithTemplate);

// const roundEarth = true;

// if (roundEarth) {
//     console.log("this is the truth")
// } else {
//     console.log("flat earther")
// }


// if (3 + 5 === 8) {
//     console.log("this is the math portion of the class")
// } else {
//     console.log("I was told there would be no math")
// }


// // "4" = 4; //assignment

// // "4" == 4 //values

// //     "4" === 4 //strict equals checks type

// // !== does not equal

// // <=
// // >=
// // <
// // >

// const friendsAtSkillspire = 10;

// if (friendsAtSkillspire === 0) {
//     console.log("awesome sauce, i hope nobody is sick");
// } else if (friendsAtSkillspire >= 4) {
//     console.log("cool lets play mario party")
// } else {
//     console.log("great lets have a party")
// }


// //loops
// let friendsAtSkillspire = 0;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// friendsAtSkillspire = friendsAtSkillspire + 1;
// console.log(friendsAtSkillspire);

// let friendsAtSkillspire = 0;
// while (friendsAtSkillspire < 10) {
//     friendsAtSkillspire = friendsAtSkillspire + 1;
// }
// console.log(friendsAtSkillspire);

//Data Types

//Objects

const person = {
    "name": "Lil Mo Diddy",
    "city": "Columbia City",
    "hungry": true,
    "numberOfPizzaSlicesCanBeEatenBy": 1200,
}

console.log(person.numberOfPizzaSlicesCanBeEatenBy);


const animal = {
    "name": "komodo dragon",
    "country": "Malaysia",
    "type": "reptile",
    "sound": "hiss",
    "Would you hang out with this animal?": false,
    "numberOfHands": "4",
}

// console.log(animal);
console.log(animal.sound);
//create an object that is an animal, give it 5 properties (sound, name, type, how many paws it has, would you hang out with that animal)

const person1 = {
    name: "Samir tha Savage",
    age: 138,
}

const person2 = {
    name: "Dragonforce Ana",
    age: 0
}

function suggestMusic(person) {
    if (person.age < 142 && person.age > 12) {
        console.log("We think you listen to Migos and believe you are the 4th member")
    } else if (person.age > 1 && person.age < 13) {
        console.log("you obviously like Cardi B")
    } else {
        console.log("you are too old for this survey geezer")
    }
}

// suggestMusic(person2);
suggestMusic(person1);

const ghost = {
    name: "Salah",
    speak() {
        console.log("boooooo")
    }
}

ghost.speak()

const cow = {
    name: "Blonde",
    speak() {
        console.log("moooooooooo")
    }
}
cow.speak()

const album = {
        title: {
            albumTitle: "Fight Night"
        },
        songs: {
            track1: "songstuff",
            track2: "moreSongStuff"
        },
        getSongs() {
            return `${this.title.albumTitle} ${this.songs.track1}`
        }
    }
    // console.log(this.songs.track1)
    // console.log(album.songs)
    // album.getSongs()

//Arrays

const weekdays = ["Mon", "Tues", "Wed"];
//0, 1, 2
// console.log(weekdays.length);
// console.log(weekdays.join(" | "));
// console.log(weekdays.push("Thurs")); //adds to end of array
// console.log(weekdays);
// console.log(weekdays.pop());
// console.log(weekdays);

const courses = [
    { teacher: 'thomas', course: "JS" }, //0
    { teacher: 'samia', course: "js" }, //1
    { teacher: 'munir', course: "c#" } //2
]


// for (let i = 0; i < courses.length; i++) {
//     console.log(courses[i]);
// }

// courses.forEach(function(course) {
//     console.log(courses)
// })

//i++ = i + 1
//write an array with 6 indexes of objects that contain an artist and a song
//use a for loop to run through the array
//use foreach to run through array

// courses.push({ teacher: 'farhad', course: "angular" }) //3
//     // console.log(courses);
//     // console.log(courses.unshift({ teacher: 'waka flocka', course: 'stuff' })); //adds to the front
//     // console.log(courses)
// console.log(courses.shift());
// console.log(courses)

const songs = [
    { artist: "m", song: "do" },
    { artist: "o", song: "re" },
    { artist: "h", song: "mi" },
    { artist: "a", song: "fa" },
    { artist: "m", song: "so" },
    { artist: "e", song: "la" },
    { artist: "d", song: "ti" },
    { artist: "s", song: "do" },
]

// for (let i = 0; i < songs.length; i++) {
//     console.log(songs[i]);
// }

// songs.forEach(function(songs) {
//     console.log(songs + `${songs.artist}`)
// })

let dog = {
    "bark": "woof",
    "eat": "food",
}

console.log(dog.eat);