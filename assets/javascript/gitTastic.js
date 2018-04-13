//open ui and see buttons(catagories)
//form with creat new button box.  sep. div
//make them clickable
//make onbuttn sclick that makes api call.
//make another div for pics to spawn
// on add button after buttons made makes another api call to populate. 
//pics are clickable buttons. 
//ajax call is to make api call.
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=wyoeKcfW1HBodpypuvIUoSpHUx3g7t8B";
var search = "";
console.log("test")
$(document).ready(function() {
    //create an array of items to use
    var anime = [
        "naruto", "bleach", "yu yu hakusho", "fate/stay night",
        "tokyo goul", "dragonball", "attack on titan", "dragon eye",
        "elfen lied", "akame ga kill", "hunterxhunter", "tenjo tenge", "test"
    ];

    for (var i = 0; i < anime.length; i++) {
        var button = $("<button>");
        button.attr("class", "query")
        button.data("anime", anime[i]);
        button.append(anime[i]);
        $("#buttonRow").append(button);
    };
    // 
    $(".picRow").on("click", anime.data, function() {
        search = anime.data;

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                document.getElementById("itemDisplay").innerHTML = `<div class="Col">(${response.data[0].images.original.url}anime)</div>`
                console.log(response.data[0].images.original.url);
                // var result = response.data;
                // for (var i = 0; i < anime.length; i++) {
                //     var animeDiv = $("<div class=\"anime-item\">");
                //     var rating = anime[i].rating;
                //     var p = $("<p>").text("Rating: " + rating);
                //     var animated = anime[i].images.fixed_height.url;
                //     var still = anime[i].images.fixed_height_still.url;
                //     var animeImage = $("<img>");
                //     animeImage.attr("src", still);
                //     animeImage.attr("data-still", still);
                //     animeImage.attr("data-animate", animated);
                //     animeImage.attr("data-state", "still");
                //     animeImage.addClass("anime-image");
                //     animeDiv.append(p);
                //     animeDiv.append(animaImage);
                //     $("#anime").append(animeDiv);
            });
    });
});
//console.log(response);
console.log("This button works");

//<div id="gifButton(lLsGW1gRNThxJ2m7vFnjSDJPJmn4I82N)" var API_key="wyoeKcfW1HBodpypuvIUoSpHUx3g7t8B" ; var API_url="";