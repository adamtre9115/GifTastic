// api key 6ZmJCr6fkcI6grbwXy443FPGFOIlRPF9
var gifs = ["hello", "swerve", "lit", "savage", "oh-snap", "lol"];

function buttonDisplay(){
    for (var i = 0; i < gifs.length; i++){
       var $newButton = $("<button></button>")
       $($newButton).attr("id", gifs[i]);
        $($newButton).html(gifs[i]);
        $("#buttons").append($newButton);
    }
}
buttonDisplay();
