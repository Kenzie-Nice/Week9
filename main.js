$(document).ready(function () {
    // COR will demand for access! Please refer to ReadME if needed
    const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?format=json&appid=0";
    
    $.getJSON(apiUrl, function (data) {

        let playerCount = data.response.player_count;
        
       
        let output = `<div class="item"><h3>Current Player Count: ${playerCount}</h3></div>`;
        
    
        $("#data-container").html(output);
        
        
        $(".item").highlightEffect();
    });

    
    $.fn.highlightEffect = function () {
        this.css({ 
            "background-color": "#f0f8ff", 
            "border": "2px solid #007bff", 
            "padding": "10px", 
            "border-radius": "5px" 
        });
        return this;
    };
});
