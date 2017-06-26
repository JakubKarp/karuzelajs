//1.  deklaracja zmiennych
    /*var carousel = $("#carousel");
    var carouselList = $(".ul-class");
    var carouselDots = $(".dots");*/
  

var carousel = document.getElementById("carousel");
var carouselLi = document.querySelectorAll("ul.ulcarousel > li");
var carNav = document.querySelector("ul.navdot");



//2. ile obrazów tyle kropek
    /*carouselList.find("li").each(function(){
        carouselDots.append("<li></li>");
    });*/

for (i = 0; i < carouselLi.length; i++) {
    //console.log(i);
    var liElement = document.createElement("li");
    carNav.appendChild(liElement); 
    //console.log(liElement);

};


//3. pierwsza kropka aktywna
    /*var dot = $(".dots li");
    dot.first().addClass("active");
    */
    var dotAll = carNav.children;
        //console.log(dotAll);
    //var dotFirst = carNav.children[0];
        //console.log(dotFirst);    
    //dotFirst.classList.add('active');
    carNav.children[0].classList.add('active');

//4. po kliknięciu zmiana statusu kropki
    /*dot.click(function() {
        var target = $(this).index();
        //console.log(target);
        slideChange(target);
    });*/


// PIOTR. NIE MAM POJECIA, JAK MANIPULOWAĆ KLASĄ ACTIVE PO KLIKNIĘCIU - DODAWAĆ JĄ LUB ODEJMOWAĆ. pLEASE PODPOWIEDŹ    
    var dotArray = [].slice.call(dotAll);
    for (j = 0; j < dotArray.length; j++){
        var dotArrayIteration = dotArray[j]; 
            console.log(dotArrayIteration);  
        dotArrayIteration.addEventListener("click", zmianaSlajdu);
            function zmianaSlajdu(){ 
                
               
                //dotArrayIteration.classList.remove('active');
                dotArrayIteration.querySelectorAll(dotAll).classList.add('active'); // to nie działa w ogóle
                dotArrayIteration.classList.add('active'); //to działa na ostatnią kropkę
            
            };

    };


//console.log(dotArray);
    
          



//5. slajdowanie zdjęć po kliknięciu kolejnych kropek
/*    function slideChange(target) {
        carouselList.stop().animate({'left': -600 * target });
        dot.removeClass('active').eq(target).addClass('active');
        resetInterval();
    };*/
    
//function moveAndActive(dotArrayIteration){};
    
    

    
    //6. slajdowanie automatyczne
/*
    function slider(){     
        target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        slideChange(target);
    };
*/
        
    //7. ustawienie interwału
  //  interval = setInterval(function(){slider()}, 2000);
//    https://stackoverflow.com/questions/15521081/jquery-animate-in-pure-javascript
    
    //8. prawy i lewy element do klikania
    /*$('.right').click(function(){
        target = target = dot.siblings('.active').index();
        target == dot.length - 1 ? target = 0 : target += 1;
        slideChange(target);
    });
    $('.left').click(function(){
        target = target = dot.siblings('.active').index();
        target == 0 ? target = dot.length - 1 : target -= 1;
        slideChange(target);
        
    });*/
    
    //9. funkcja kasująca slajdowanie automamatyczne - wstawiona w momencie kliknięcia kolejnych kropek - patrz linia 28
    /*function resetInterval(){
        clearInterval(interval);
        interval = setInterval(function(){slider();}, 2000);
    };
    
});
*/









