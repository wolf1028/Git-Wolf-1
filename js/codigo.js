$(document).ready(function(e) {	
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
	$("#logo").delay(3000).show("slow").click(function(e) {
        $(this).hide("slow")
		$("h1").html("Cambio de Titulo y de color").css("color", "#00426C");
    });
	
	/*Indicar que los hipervinculos con la direccion "https://www.facebook.com" se van abrir en otra pagina,
	lo transforma en letras mayusculas, le agrega una imagen de fondo icon_facebook y cuando el mouse esta sobre el 					    hipervinculo aparezca el titulo "FaceBook" */
	
	 $("a[href^='https://www.facebook.com']").attr("title","FaceBook").attr("target","_blank")
  .css("text-transform","uppercase")
  .css("background","url(img/icon_facebook.png)")
  .css("background-repeat","no-repeat")
  .css("padding-left","25px")
	
});