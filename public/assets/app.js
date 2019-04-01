$(function() {    
    // eat burger button
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = true;
        var devouredState = {
            devoured: isDevoured
        };

        console.log("burger " + id + "eaten");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("burger state updated");

            location.reload();
        });
    });

    // add new burger button
    $("#add-burger-btn").on("click", function () {
        // do nothing if field is blank
        if ($("#add-burger-form").val().trim() === "") return;
        
        var newBurger = {
            name: $("#add-burger-form").val().trim(),
        };

        console.log("burger " + name + "added");

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log(name + " created");
            
            location.reload();
        });
    });
});