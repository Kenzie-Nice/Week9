$(document).ready(function () {
    // Fetch JSON data using jQuery AJAX
    $.getJSON("data/data.json", function (data) {
        let output = "";
        $.each(data, function (index, item) {
            output += `<div class="item"><h3>${item.name}</h3><p>${item.description}</p></div>`;
        });
        
        // Append data to the container
        $("#data-container").html(output);
        
        // Apply custom jQuery plugin
        $(".item").highlightEffect();
    });

    // Custom jQuery plugin
    $.fn.highlightEffect = function () {
        this.css({ "background-color": "#f0f8ff", "border": "2px solid #007bff", "padding": "10px", "border-radius": "5px" });
        return this;
    };
});
