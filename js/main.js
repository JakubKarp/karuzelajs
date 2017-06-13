$(function(){
	var carouselList = $("#carousel ul");
	setInterval(zmienFoto, 2000); 
		function zmienFoto (){ 
		carouselList.animate({'marginLeft':-600}, 500, zmienPierwszeFoto);	
		};
		function zmienPierwszeFoto (){
			var pierwszeFoto = carouselList.find("li:first");
			var ostatnieFoto = carouselList.find("li:last");
			ostatnieFoto.after(pierwszeFoto);
			carouselList.css({marginLeft:0});
		};
		/*var kropki = $(".dots");
		var kropka = $(".pnedot");
		*/
	
	//var kropkaAktywna = kropka.css("backgroundColor", "black");
		/*setInterval(karuzelaKropek, 2000); 
		function karuzelaKropek (){ 
		kropki.toggle({kropka, kropkaAktywna}, zmienKropki);	
		};*/
	
		/*function zmienKropki () {
		var pierwszaKropka = kropki.find("onedot:first");
		var ostatniaKropka = kropki.find("onedot:last");
		ostatniaKropka.after(pierwszaKropka);
		};	*/ 
	/*var kropkaAktywna = .css("backgroundColor", "black");
	var kropka = $(".onedot");
	kropka.click(function(){
		kropka.css("backgroundColor", "black");				
	});*/
			
	
	
});
	