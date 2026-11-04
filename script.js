$(document).ready(function() {
    console.log("jQuery is ready!");
    $("h1").css("color", "teal");
    $("#greeting").text("Welcome to My Portfolio!");
    $(".intro").css("font-size", "18px");
    $("#light").click(function() {
        $("body").css({"background-color": "white", "color": "black"});
    });
    $("#dark").click(function() {
        $("body").css({"background-color": "#222", "color": "white"});
    });
    $("#hide").click(function() {
        $("#status").hide();
    });
    $("#show").click(function() {
        $("#status").show();
    });
    $("#toggle").click(function() {
        $("#status").toggle();
    });
    $("#fadeIn").click(function() {
        $("img").fadeIn();
    });
    $("#fadeOut").click(function() {
        $("img").fadeOut();
    });
    $("#fadeToggle").click(function() {
        $("img").fadeToggle();
    });
    $("#musicTitle, #movieTitle").click(function() {
        let panel = $(this).next();
        if (panel.css("display") === "none") {
            panel.slideDown();
        } else {
            panel.slideUp();
        }
    });
    $("#subjectTitle").click(function() {
        $("#subject").slideToggle();
    });
    $("#add").click(function() {
        let skill = $("#newSkill").val().trim();
        if (skill !== "") {
            $("#skills").append($("<li>").text(skill));
        }
    });
    $("#prepend").click(function() {
        let skill = $("#newSkill").val().trim();
        if (skill !== "") {
            $("#skills").prepend($("<li>").text(skill));
        }
    });
    $("#remove").click(function() {
        $("#skills li:last").remove();
    });
    $("#changeLink").click(function() {
        $("#social").attr("href", "https://www.instagram.com/");
        $("#social").text("Instagram");
    });
    $("#name, #email").on("input", function() {
        $("#nameOutput").text($("#name").val());
        $("#emailOutput").text($("#email").val());
    });
    let animated = false;
    $("#animate").click(function() {
        if (animated) {
            $(".bar").animate({width: "0%"}, 500);
        } else {
            $("#htmlBar").animate({width: "90%"}, 500);
            $("#cssBar").animate({width: "75%"}, 500);
            $("#jsBar").animate({width: "50%"}, 500);
        }
        animated = !animated;
    });
});