$(document).ready(function(){

    //on vs click: on works for future elements, click wont :|
    //check off specific todos by clicking
    $("ul").on("click", "li", function(){//need to add li listener to ul parent
        $(this).toggleClass("completed")
    });

    //click on X to delete todo
    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });//removes the entire li
        event.stopPropagation();//prevents event bubbling - triggering any parent event listeners
    });

    $("input[type='text']").keypress(function(event){
        if(event.which === 13){// 13 is the code for the enter key!
            //grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");//clear input text
            //create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }
    });

    $(".fa-plus").click(function(){
        $("input[type=text]").fadeToggle();
    });


})

