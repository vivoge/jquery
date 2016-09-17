$(function(){
    $('.input').click(function(){
        $.ajax({
            url:'/getlist',
            type:'POST',
            data:{
                user:'vivoge',
                password:'sdfasdf'
            },
            success:function(res,status,xhr){
                $('#box').html(res);
            }
        })
    });






});