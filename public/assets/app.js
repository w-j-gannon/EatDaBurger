// eat burger button
$(".eat-burger").on("click", function () {
    var id = $(this).data("id");
    var devoured = {
        devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
    }).then(function () {
        location.reload();
    });
});

// add new burger button
$("#add-burger-btn").on("click", function () {
    var newBurger = {
        name: $("#add-burger-form").val().trim(),
        devoured: 0
    };
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function () {
        location.reload();
    });
});