$(document).ready(function(){
    $('h1').text("Hello Morning")

    $("#par").css("color","blue")

    // event on click
    $('#box1').click(function(){
        $(this).css("background-color","red")
    })

    // event on hover
    $('#box2').hover(function(){
        $(this).css("background-color","blue")
    })

    // animate
    $('#animatedElements').click(function(){
        $(this).animate({
            top: '250px',
            left: '250px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        }, 5000)
    })

    // delay, fadeIn fadeOut
    $('#delay').click(function(){
        $(this).fadeOut(1000).delay(2000).fadeIn(1000)
    })

    // fadeTo
    $('#fadeto').click(function(){
        $(this).fadeTo("slow",0.1)
    })

    // fadeToggle
    $('#fadetoggle').click(function(){
        $(this).fadeToggle()
    })

    // show, hide
    $('#hns').click(function(){
        $(this).hide(1000).delay(2000).show(1000)
    })

    // slideUp, slideDown
    $('#und').click(function(){
        $(this).slideUp(1000).slideDown(1000).slideUp(1000)
    })

    // addClass()
    $('#add').click(function(){
        $("#manipulation").addClass('color')
    })

    // removeClass()
    $('#remove').click(function(){
        $("#manipulation").removeClass('color')
    })

})


