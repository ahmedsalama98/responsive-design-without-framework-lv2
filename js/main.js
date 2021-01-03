$(function() {
    var buttext = "";
    $("#view").click(function() {


        $(this).toggleClass("done");

        if ($(this).hasClass("done")) {
            buttext = $(this).text()
            $(".our-works h2").fadeOut()
            $(".our-works >div").removeClass("container")
            $(this).text("medium screen view")
        } else {
            $(".our-works >div").addClass("container")
            $(".our-works h2").fadeIn()
            $(this).text(buttext)
        }

    })


    $(".information .classic-list li").click(function() {

        $(this).addClass("active").siblings().removeClass("active");

        $(".information .tabs").children().removeClass("active")

        $(`.${$(this).data("list")}`).addClass("active")

    })

    $("body").css({
        "paddingTop": $(".navbar").innerHeight() + "px"
    })




    $("#bars").click(function() {

        $(".navbar .links .classic-list").slideToggle();
    })
    var topbutt = $(".to-top")
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 800) {
            topbutt.fadeIn()
        } else {
            topbutt.fadeOut()
        }
    })

    topbutt.click(function() {
        $("body,html").animate({
            scrollTop: "0"
        })
    })


})