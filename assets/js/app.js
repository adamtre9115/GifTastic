// api key 6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9

$(document).ready(function(){

    var gifs = ["hello", "swerve", "lit", "savage", "oh-snap", "lol"];
    
    
    
    function buttonDisplay(){
        for (var i = 0; i < gifs.length; i++){
           var $newButton = $("<button></button>");
           $($newButton).attr("class", "searchB");
            $($newButton).html(gifs[i]);
            $("#buttons").append($newButton);
        }
    }
    
    
    // append new button on submit button click
    function addCat(){
        $("#newCat").on("click",function(){
            var newCategory = $("#newGif").val();
            if(newCategory !== ""){
                   var $newButton = $("<button></button>");
                   $($newButton).attr("class", "searchB");
                   $($newButton).html(newCategory);
                   $("#buttons").append($newButton);
                   clearField();
                   event.preventDefault();
            } else {
                console.log("empty");
                event.preventDefault();
            }
        })
    }
    // addCat()
    
    
    // Clear input field
    function clearField(){
        $("#newGif").val("");
    }
    
    function imgRequest(){
        var title;
        // take clicked button and set title equal to its text
        $("#buttons").on("click", "button", function(e){
            var title = $(this).html();
            var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9&limit=10";
            console.log(title);
    
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).done(function(response){
                console.log(response);
            })
    
    
            e.preventDefault();
        })
    }
    // imgRequest();
    
    buttonDisplay();


})