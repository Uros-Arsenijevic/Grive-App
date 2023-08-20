$(document).ready(function(){

    $(".app").click(function(){
        $(window).scrollTop(1050)
    })

    $(".home-button").click(function(){
        location.reload()
    })

    $(".buttonUp").click(function(){
        $(window).scrollTop(1)
    })

    $(".comment-Button").click(function(){
        $(".footer1 > h2").html("Thanks for the comment")
        $("form").attr("onsubmit","return false")
    })
    
})