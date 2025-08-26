$(".add-btn").click(function() {
    let task = $("#todo-input").val().trim();
    if(task !== ""){
        $(".todo-list").append('<div class="task-item">'
            +'<span class="task">'+task +'</span>'+
            '<button class="del"> ❌ </button>'
            + '</div>')
    };
    $("#todo-input").val("");
});
$(".todo-list").on("click", ".del", function(){
    $(this).parent().remove();
});



//posts
$(document).ready(function () {
$("#load-posts").click(function () {
    $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    success: function (data) {

        let firstTen = data.slice(0, 10);

        $("#posts-container").empty();

        firstTen.forEach(function (post) {
        $("#posts-container").append(
            '<div class="card">' +
            "<h3>" + post.title + "</h3>" +
            "<small>User ID: " + post.userId + "</small>" +
            "<p>" + post.body + "</p>" +
            "</div>"
        );
        });
    },
    error: function () {
        alert("Error fetching posts.");
    }
    });
});
});
