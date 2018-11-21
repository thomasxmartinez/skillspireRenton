const express = require("express");
const path = require("path");

const complements = [
    "you look nice today",
    "that dress looks great",
    "have you been working out?",
    "you can do hard things",
    "you've gotten far in this course, easier than you thought",
    "you're programming, how cool is that?",
    "go team",
    "you're so smart",
    "nice hair",
    "nice computer",
    "you smell good",
    "you have a nice shirt",
    "you're nice",
    "nice eyes",
    "nice beard"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length)
    return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
})

app.use("/public", express.static("./public"))

app.listen(3000);

console.log("listening on http://localhost:3000");


//Add it to GitHub in its own repo
// Make an /insult endpoint that returns random insults to be hurled at your foes. Add another button to be able to request insults on your page.
// Use Parcel and PopMotion to animate your page. Parcel has a parcel build index.html see here command that you could have it build your project into your public folder.
// Style the whole page nicely using CSS! Put your CSS in your public folder and include it the <head></head> of your index.html