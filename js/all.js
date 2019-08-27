$(document).ready(function () {

    $("#button").click(function () {
        $("p").css("color", "red");
    });
    $("#button1").click(function () {
        // $(".clss1234").css({
        //     "color": "blue",
        //     "background-color": "green",
        //     "text-align": "center"
        // });
    });
    $("#add").click(function(){
    
    });
    //travaing
    $("#buttont-traval").click(function(){
        $(".travel-lave3").parent().css("border","5px solid red");
    });
    // $(".traval-level1").find("h1").css({"color":"red","border":"1px,solid blue"});
    $(".travel-lave3").find("h1").css({"color":"red","border":"1px,solid blue"});



});


