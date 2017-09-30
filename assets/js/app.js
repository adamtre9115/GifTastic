// api key 6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9

$(document).ready(function () {

    var gifs = ["hello", "swerve", "lit", "savage", "oh snap", "lol"];



    function buttonDisplay() {
        for (var i = 0; i < gifs.length; i++) {
            var $newButton = $("<button></button>");
            $($newButton).attr("class", "searchB");
            $($newButton).html(gifs[i]);
            $("#buttons").append($newButton);
        }
    }


    // append new button on submit button click
    function addCat() {
        $("#newCat").on("click", function () {
            var newCategory = $("#newGif").val();
            $("#buttons").empty();
            gifs.push(newCategory)
            clearField();
            buttonDisplay();
            event.preventDefault();
        })
    }



    // Clear input field
    function clearField() {
        $("#newGif").val("");
    }

    function imgRequest() {
        var title;
        // take clicked button and set title equal to its text
        $("#buttons").on("click", "button", function (e) {
            $("#display").empty();
            var title = $(this).html();
            var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9&limit=12";
            console.log(title);

            $.ajax({
                url: queryUrl,
                method: "GET"
            }).done(function (response) {
                console.log(response.data[0]);
                var results = response.data

                for (var i = 0; i < results.length; i++) {
                    // var newDiv = $("<div class='gifAdded'></div>");
                    var divImg = $("<img>");
                    divImg.attr("src", results[i].images.fixed_height_still.url);
                    divImg.attr("class", "img-fluid col-md-4 gifAdded img-thumbnail");
                    divImg.attr("data-still", results[i].images.fixed_height_still.url);
                    divImg.attr("data-animate", results[i].images.fixed_height.url);
                    // $(newDiv).append(divImg);
                    $("#display").append(divImg);

                }

            })

        })
    }

    function imageSwap(){
        $("#display").on("click", "img", function(){
            // console.log($(this).attr("src"));
           var still = $(this).attr("data-still");
           var animate = $(this).attr("data-animate");
           if ( $(this).attr("src") === still){
               $(this).attr("src", animate)
           } else {
               $(this).attr("src", still);
           }
        })
    }
  

    
    function loadImages() {
        addCat();
        buttonDisplay();
        imgRequest();
        imageSwap();
       
    }
    

    loadImages();

})