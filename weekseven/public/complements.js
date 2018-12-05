document
    .querySelector(".request-complement")
    .addEventListener("click", function() {
        fetch("/complement")
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                document.querySelector(".complement").innerHTML = "<img src=\"https://www.wdjx.com/wp-content/uploads/2018/10/Animal.Dog_.Golden.Retriever.Puppies.jpg\"/>";;
            })
            .catch(function(err) {
                console.error(err);
            })
    })