$("#showInfo").click(function() {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let age = $("#age").val().trim();
    let valid = true;
    let errorMsg = "";

    $("input").removeClass("invalid");
    $("#messages").empty();
    $("#infoBox").hide();

    if (name === "") {
        valid = false;
        errorMsg += "<p>Name cannot be empty.</p>";
        $("#name").addClass("invalid");
    }
    if (!email.includes("@") || !email.includes(".")) {
        valid = false;
        errorMsg += "<p>Email must contain '@' and '.'</p>";
        $("#email").addClass("invalid");
    }
    if (isNaN(age) || Number(age) <= 10) {
        valid = false;
        errorMsg += "<p>Age must be a number greater than 10.</p>";
        $("#age").addClass("invalid");
    }

    if (!valid) {
        $("#messages").html('<div class="error">' + errorMsg + "</div>");
    } else {
        $("#infoBox")
        .html("<strong>Name:</strong> " + name + "<br>" +
                "<strong>Email:</strong> " + email + "<br>" +
                "<strong>Age:</strong> " + age)
        .css({ "background": "#d9fdd3", "border": "1px solid green" })
        .show();
        $("#messages").html('<div class="success">User Info Loaded Successfully!</div>');
    }
    });

    $("#clearInfo").click(function() {
    $("input").val("").removeClass("invalid");
    $("#messages").empty();
    $("#infoBox").hide();0
    });

    $(".toggle-btn").click(function() {
    let target = $(this).data("target");
    $(target).toggleClass("active-style");
    });

    $("#resetAll").click(function() {
    $(".box").removeClass("active-style");
    alert("All boxes reset!");
    });

    $("#hoverPara").hover(function() {
    $(this).attr("title", "Title changed on hover!");
    });

    $("#changeContent").click(function() {
    $("#hoverPara").html("This is the <strong>new content</strong>!");
    });