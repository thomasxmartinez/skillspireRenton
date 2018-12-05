const express = require("express");
const path = require("path");

const complements = [
    "https://www.wdjx.com/wp-content/uploads/2018/10/Animal.Dog_.Golden.Retriever.Puppies.jpg"
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

////////////////THIS IS HOMEWORK TO BE DONE PRIOR TO COMING IN TUESDAY////////////////
//Add it to GitHub in its own repo
// Make an /insult endpoint that returns random insults to be hurled at your foes. Add another button to be able to request insults on your page.
// Use Parcel and PopMotion to animate your page. Parcel has a parcel build index.html see here command that you could have it build your project into your public folder.
// Style the whole page nicely using CSS! Put your CSS in your public folder and include it the <head></head> of your index.html
////////////////THIS IS HOMEWORK TO BE DONE PRIOR TO COMING IN TUESDAY////////////////