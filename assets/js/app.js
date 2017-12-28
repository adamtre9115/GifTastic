// api key 6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9

$(document).ready(function () {

    var gifs = ["bruh", "swerve", "lit", "savage", "preach", "lol", "shade"];



    function buttonDisplay() {
        for (var i = 0; i < gifs.length; i++) {
            // create buttons
            var $newButton = $("<button></button>");
            // assign buttons these classes
            $($newButton).attr("class", "searchB");
            // make the button text say the text of the array index
            $($newButton).html(gifs[i]);
            // append the buttons to the buttons div
            $("#buttons").append($newButton);
        }
    }


    // append new button on submit button click
    function addCat() {
        $("#newCat").on("click", function (e) {
            var newCategory = $("#newGif").val();
            // clear buttons div
            $("#buttons").empty();
            // push buttons into gifs array
            gifs.push(newCategory);
            // clear input area of entered text
            clearField();
            // re display buttons to page
            buttonDisplay();
            // prevent automatic refresh on submit
            e.preventDefault();
        })
    }



    // Clear input field
    function clearField() {
        // clear input area of entered text
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
                    // assign all images to divImg
                    var divImg = $("<img>");
                    // on render images will come in still
                    divImg.attr("src", results[i].images.fixed_height_still.url);
                    // with these classes
                    divImg.attr("class", "img-fluid col-md-4 gifAdded img-thumbnail");
                    divImg.attr("data-still", results[i].images.fixed_height_still.url);
                    divImg.attr("data-animate", results[i].images.fixed_height.url);
                    // append all rendered images to this div
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
        //    if image is equal to data-still
           if ( $(this).attr("src") === still){
            //   replace the image with the animated gif
               $(this).attr("src", animate)
           } else {
            //    or leave it as still if it is animated
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
