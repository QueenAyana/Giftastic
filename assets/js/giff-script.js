var cartoonTopics = ["dexters laboratory", "powerpuff girls", "ren and stimpy", "ed edd and eddy", "johnny bravo", "catdog", "kim posible", "my life as a teenage robot", "tom and jerry", "looney toons"]

console.log(cartoonTopics)
var toonName = "";
buttonMkr();
function buttonMkr() {
    cartoonTopics.forEach(function (cartoonName) {
        // create a new button
        var newButton = $("<button>");
        // add values to the new button from our array
        newButton.html(cartoonName);
        newButton.addClass("btn btn-primary btn-sm")
        newButton.attr("id", "toonBtn")
        newButton.on("click", function () {
            var itemValue = cartoonName;
            console.log(itemValue);
            toonName = itemValue.replace(/\s+/g, '');
            console.log(toonName);
        })
        $("#gifDiv").append(newButton)
    })
}

$("button").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=V0z7PqjeqSOoPLF5G0O2bj7xJM2k7Hm5&q" + toonName;

    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var imageUrl = response.data.image_original_url;
            // Creating and storing an image tag
            var toonImage = $("<img>");

            // Setting the toonImage src attribute to imageUrl
            toonImage.attr("src", imageUrl);
            toonImage.attr("alt", toonName + " image");
            // append to the dom
            $("gifPocket").append(toonImage)
        })
})
$("#funnBtn").on("click", function () {
    alert("this is submited")
});
//build queryurl 
//make ajax call
//then(create ,populate, append the giphys)
