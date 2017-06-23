//deklaracja zmiennych
/*var carousel = $("#carousel");
    var carouselList = $(".ul-class");
    var carouselDots = $(".dots");*/
  

var carousel = document.getElementById("carousel");
//var carouselList = document.getElementsByClassName('ulcarousel');
var carouselNav = document.getElementsByClassName('navdot');

//ile obrazów tyle kropek
/*carouselList.find("li").each(function(){
       //console.log("test");
        carouselDots.append("<li></li>");
    });*/
var test = document.querySelectorAll("ul.ulcarousel > li");
    console.log(test.length);
//carouselList.forEach(){
  //  carouselNav.innerHTML("<li></li>");
//};


/*

//oryginał
$(function() {
      
    
    
    //pierwsza kropka aktywna

    var dot = $(".dots li");
    dot.first().addClass("active");
    
    //po kliknięciu zmiana statusu kropki
    dot.click(function() {
        var target = $(this).index();
        //console.log(target);
        slideChange(target);
    });
    
    //slajdowanie zdjęć po kliknięciu kolejnych kropek
    function slideChange(target) {
        carouselList.stop().animate({'left': -600 * target });
        dot.removeClass('active').eq(target).addClass('active');
        resetInterval();
    };
    
    //slajdowanie automatyczne
    function slider(){     
        target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        slideChange(target);
        
    };
    //ustawienie interwału
    interval = setInterval(function(){slider()}, 2000);
    
    
    //prawy i lewy element do klikania
    $('.right').click(function(){
        target = target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        slideChange(target);
    });
    $('.left').click(function(){
        target = target = dot.siblings('.active').index();
        target == 0 ? target = dot.length - 1 : target -= 1;
        slideChange(target);
        
    });
    
    //funkcja kasująca slajdowanie automamatyczne - wstawiona w momencie kliknięcia kolejnych kropek - patrz linia 28
    function resetInterval(){
        clearInterval(interval);
        interval = setInterval(function(){slider();}, 2000);
    };
    
});

*/









