//ex.1
$(document).ready(function(){
    $("h2").css({backgroundColor: "green"})
});

//ex.2
$(document).ready(function(){
    $(".buttons"). parent().css({backgroundColor: "red"});
});

//ex.3
$(document).ready(function(){
    $(".module").children().css({backgroundColor: "blue"}) 
});

//$(".module:nth-child(n").css({backgroundColor: "blue"})

//ex.4
$(document).ready(function(){
    $(".module").find("li").eq(2).css({backgroundColor: "green"}) 
});

//$(".module li:eq(2)").css({backgroundColor: "green"})

//ex.5
$(document).ready(function(){
    $("#myList").first().css({backgroundColor: "yellow"}) 
});

//ex.6
$(document).ready(function(){
    $("#slideshow").last().css({backgroundColor: "black"}) 
});

//ex.7
$(document).ready(function(){
    if ($("#search").first().is("form")){
        alert(" “O elemento form é filho de Search")
    }
    else 
        alert("O elemento form não é filho de Search.");
});


//ex.
$(document).ready(function(){
    $("ul:not(#slideshow)").css({backgroundColor: "blue"}) 
})

//ex.9
$(document).ready(function(){
    $("li").has("p").css({backgroundColor: "pink"}) 
})

//ex.10
$(document).ready(function(){
    $("#myListItem").text("Este é um novo item de lista");
})

//ex.11
$(document).ready(function(){
    $(".selected").next().css({backgroundColor: "grey"}) 
})

//ex.12
$(document).ready(function(){
    $(".input_text").prev().css({backgroundColor: "grey"}) 
})

//ex.13
$(document).ready(function(){
    $("#listItem_2").siblings().css({backgroundColor: "green"}) 
})
//ex.14
$(document).ready(function(){
    $("[src]").css({backgroundColor: "yellow"}) 
})

// //ex.15
$("#header, #nav[class^='selected']");

//ex.16
$(document).ready(function(){
    $("input[type*='text']")

})

//ex.17
$(document).ready(function(){
    $("input[value='*']") 

})
//ex.18
$(document).ready(function(){
    $("input[type!='submit']".css({backgroundColor: "red"})) 

})

//ex.19
$(document).ready(function(){
    $("a[href^='blog']").css({backgroundColor: "green"})
})

//ex.20
$(document).ready(function(){
    $("[value$= a]").css({backgroundColor: "red"})
})

//ex. 21
$(document).ready(function(){
    $("a[href*='html']").css({backgroundColor: "grey"})
})

//DUPLA ROBERTA   