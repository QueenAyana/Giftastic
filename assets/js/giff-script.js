var cartoonTopics = ["dexters laboratory", "powerpuff girls", "ren and stimpy", "ed edd and eddy", "johnny bravo", "catdog", "kim possible", "my life as a teenage robot", "tom and jerry", "looney toons"]

console.log(cartoonTopics)
var toonName = "";
var dataNum = 0
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
            toonName = itemValue//.replace(/\s+/g, '');
            console.log(toonName);
            dataNum ++
        })
        $("#gifDiv").append(newButton)
    })
}

$("body").on("click", "#toonBtn", function(){

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=V0z7PqjeqSOoPLF5G0O2bj7xJM2k7Hm5&q=" + toonName

    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var imageURL = response.data[dataNum].images.original_still.url;
            var gifURL = response.data[dataNum].images.original.url;
            // Creating and storing an image tag
            var toonImage = $("<img>");
            
            console.log(imageURL)
            console.log(response.data)
            // Setting the toonImage src attribute to imageUrl
            toonImage.attr("src", imageURL);
            toonImage.attr("alt", toonName + " image");
            console.log(toonImage[0].src)
            // append to the dom
            $("#gifPocket").append(toonImage)
            
            toonImage.hover(function () {
                toonImage.attr("src", gifURL);
                toonImage.attr("alt", toonName + " gif");
            },null)
        })

})
$("#funnBtn").on("click", function () {
    var addToon = $("#addCartoon").val().trim()
    cartoonTopics.push(addToon)
    $("#gifDiv").empty()
    buttonMkr();
    console.log(cartoonTopics)
});
//build queryurl 
//make ajax call
//then(create ,populate, append the giphys)
