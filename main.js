$(document).ready(function () {
    // Call the Steam API using jQuery AJAX
    $.getJSON("https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?format=json&appid=0", function (data) {
        // Log the data to check its structure
        console.log(data);
        
        // Assuming the API returns the data in a specific format
        // You can now display the data on your page
        let output = `<div class="steam-data">
                        <h3>Current Players: ${data.response.player_count}</h3>
                        <p>App ID: ${data.response.appid}</p>
                      </div>`;
        
        // Append data to the container
        $("#data-container").html(output);

        // Apply a custom jQuery plugin if needed
        $(".steam-data").highlightEffect();
    });

    // Custom jQuery plugin to highlight the data
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
