// api key 6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9
var gifs = ["hello", "swerve", "lit", "savage", "oh-snap", "lol"];



function buttonDisplay(){
    for (var i = 0; i < gifs.length; i++){
       var $newButton = $("<button></button>");
       $($newButton).attr("id", gifs[i]);
        $($newButton).html(gifs[i]);
        $("#buttons").append($newButton);
    }
}
buttonDisplay();

// append new button on submit button click
function addCat(){
    $("#newCat").on("click",function(){
       var newCategory = $("#newGif").val();
       console.log(newCategory);
       var $newButton = $("<button></button>");
       $($newButton).attr("id", newCategory);
       $($newButton).html(newCategory);
       $("#buttons").append($newButton);
       clearField();
       event.preventDefault();
    })
}
addCat()

// Clear input field
function clearField(){
    $("#newGif").val("");
}