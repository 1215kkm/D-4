let i = 0

setInterval(function(){
    i++

    if(i >= 3){
        i = 0
    }

    $('.fade li').fadeOut()
    $('.fade li').eq(i).fadeIn()
}, 2000)



/* popup */
$('.notice li').eq(0).click(function(){
    $('.popup').show()
})
$('.popup a').click(function(){
    $('.popup').hide()
})
