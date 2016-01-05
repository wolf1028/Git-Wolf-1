$(document).ready(function(e) {	

	/*Banner de Imagenes con animacion, agrega un <div> con wrapInner, captura la altura del img:first-child y lo ultiliza 		    para uzarlo como la altura del #contenido_banner;*/
	
	$("#contenido_banner img:first-child").load(function(e) {
		var intervalo;
		//379
		var img_alt = parseInt($(this).css("height"));	
		$("#contenido_banner").css("height",img_alt + "px");
		$("#contenido_banner").wrapInner("<div id='contenido_img'>");
		intervalo = setInterval(animar,2000);
		
		function animar(){
			$("#contenido_img").animate({top:"-=" + img_alt},500,cambiar);
			}
			
		function cambiar(){
			$("#contenido_img").append($("#contenido_img img:first-child"));
			$("#contenido_img").css("top","0");
			}
    });
	
	//Agregar id a cada h2 y agregar una lista de estos id en el nav
	
	var contar = 0;
    $("h2").each(function(index, element) {
		contar++;
        $(this).attr("id", "Titulo" + contar);
		$("#Menu").append("<li><a href='#Titulo" + contar + "'>" + $(this).html() + "</a></li>");
    });
	
	//Aparece el logo en 3 segundos y dandole clcik encima del logo desaparece y cambia de color y contenido al <h1>  
	$("#logo").delay(5000).show("slow").click(function(e) {
        $(this).hide("slow")
		$("h1").html("Cambio de Titulo y de color").css("color", "#553300");
    });
	
	/*Indicar que los hipervinculos con la direccion "https://www.facebook.com" se van abrir en otra pagina,
	lo transforma en letras mayusculas, le agrega una imagen de fondo icon_facebook y cuando el mouse esta sobre el 					    hipervinculo aparezca el titulo "FaceBook" */
	
	 $("a[href^='https://www.facebook.com']").attr("title","FaceBook").attr("target","_blank")
  .css("text-transform","uppercase")
  .css("background","url(img/icon_facebook.png)")
  .css("background-repeat","no-repeat")
  .css("padding-left","25px")
  
    var art_top = $("#articulos").offset().top;  // articulos top
	var art_left = $("#articulos").offset().left; // articulos left
	var art_height = $("#articulos").height();   // articulos height
	var art_width = $("#articulos").width();     // articulos width
	var height_bird = $("#bird_rojo").height(); // muñeco height
    var width_bird  = $("#bird_rojo").width(); // muñeco width   	 
	var sonido1 = new Audio("media/angry.mp3");
	var sonido2 = new Audio("media/pig.mp3");
   setTimeout(mostrar_rojo,1000);
   setTimeout(mostrar_celeste,3000);

   
   function mostrar_rojo(){ 	 
   	 var randomtop = art_top + Math.floor((Math.random()* (art_height - height_bird))+1);
     var randomleft = art_left + Math.floor((Math.random()* (art_width - width_bird))+1);
	sonido1.play();
	   	$("#bird_rojo").css("top",randomtop + "px").css("left",randomleft + "px").css("display","block")
		.click(function(e) {
            $(this).css("display","none");
			sonido2.play();
        });
	   }
   function mostrar_celeste(){
	 var randomtop = art_top + Math.floor((Math.random()* (art_height - height_bird))+1);
     var randomleft = art_left + Math.floor((Math.random()* (art_width - width_bird))+1);
	sonido1.play();
	   	   	$("#bird_celeste").css("top",randomtop + "px").css("left",randomleft + "px").css("display","block")
		.click(function(e) {
            $(this).css("display","none");
			sonido2.play();
        });
	   }

});