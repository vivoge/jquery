$(function(){
    $('.input').click(function(){
        $.ajax({
            url:'/getlist',
            type:'POST',
            data:$('form').serialize()/*{
                username:$('form input[name=username]').val(),
                password:$('form input[name=password]').val()
            }*/,
            success:function(res,status,xhr){
                $('#box').html(res);
            }
        })
    });






});