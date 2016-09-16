$(function(){
    var i=0;
$('.show').on('click',function(){

        $('.test').first().show(100,function showNext(){
            $(this).next().show(100,showNext)
        })

});




    $('.hide').on('click',function(){
        $('.test').hide(100)
    });



});














