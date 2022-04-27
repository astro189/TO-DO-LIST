//for getting our items in the todo list
$("ul").on("click","li",function(event){
    $(this).toggleClass("completed");
    $(this).find('.fa-regular').toggleClass('fa-square-check');
});

//for deleting our items in the todo list
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        (this).remove();
    });
    event.stopPropagation();
});

//for adding new items to the todolist
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var todotext=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa-solid fa-eraser'></i></span><i class='fa-regular fa-square'></i> " + todotext + "</li>")
    }
});

$(".fa-pencil").click(function(){
    $("input[type='text'").fadeToggle();
})
