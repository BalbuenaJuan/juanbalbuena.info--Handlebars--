$(document).ready(function(){

	var menu = $('#menu');
  	var contenedor = $('#menu-contenedor');
  	var menu_offset = menu.offset();

  	$(window).on('scroll', function() {
    	if($(window).scrollTop() > menu_offset.top) {
     		 menu.addClass('menu-fijo');
    	} else {
      		menu.removeClass('menu-fijo');
    	}
  	});

	$('#skills').click(function() {
		$('#trabajo').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#proyecto').click(function() {
		$('#proyectos').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#contact').click(function() {
		$('#contacto').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#education').click(function() {
		$('#formacion').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});//FIN DE ENVIO 1 SOLA VEZ

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('Enviando');

	});// FIN DE CAMBIO DE TEXTO BOTON

	$("#mensaje").on("focusout", function(){
		if($(this).val() == ""){
			$("#mensaje").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
		}
		else{
			$("#mensaje").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
		}
	});
	$("#email").on("focusout", function(){
		if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
			$("#email").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
		}
		else{
			$("#email").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
		}
	});
	$("#nombre").on("focusout", function(){
		if($(this).val() == ""){
			$("#nombre").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
		}
		else{
			$("#nombre").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
		}
	});
	$("#range").on("change", function(){
		$("#contador").html(this.value + "€");
	});//FIN VALIDACIÓN VISUAL EMAIL
});//FIN DE READY

