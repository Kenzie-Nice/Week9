$(document).ready(function () {
    // Use CORS Anywhere to bypass the CORS issue
    const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?format=json&appid=0";
    
    $.getJSON(apiUrl, function (data) {
        // Extract player count from the response
        let playerCount = data.response.player_count;
        
        // Create output to display the player count
        let output = `<div class="item"><h3>Current Player Count: ${playerCount}</h3></div>`;
        
        // Append the output to the data container
        $("#data-container").html(output);
        
        // Apply custom jQuery plugin to the displayed data
        $(".item").highlightEffect();
    });

    // Custom jQuery plugin for styling the displayed data
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
