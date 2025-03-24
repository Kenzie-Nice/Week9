$(document).ready(function () {
    // Fetch the local data.json file using jQuery AJAX
    $.getJSON("data.json", function (data) {
        // Extract the player count from the response
        let playerCount = data.response.player_count;
        
        // Display the player count on the page
        let output = `<div class="item"><h3>Current Player Count: ${playerCount}</h3></div>`;
        
        // Append the output to the container
        $("#data-container").html(output);
        
        // Apply custom jQuery plugin (e.g., highlight effect)
        $(".item").highlightEffect();
    });

    // Custom jQuery plugin to add a highlight effect
    $.fn.highlightEffect = function () {
        this.css({ "background-color": "#f0f8ff", "border": "2px solid #007bff", "padding": "10px", "border-radius": "5px" });
        return this;
    };
});
