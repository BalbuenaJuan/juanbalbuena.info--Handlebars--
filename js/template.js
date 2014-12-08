/**
 * Created by Juan on 08/12/2014.
 */
$(document).ready(function(){
    var Juan = {
        nombre: "Juan Balbuena",
        descripcion: "Aprendiz de desarrollo Web, me encanta JavaScript y Django. Siempre mejorando mis habilidades, estoy libre para hacer proyectos",
        avatar: "//juanbalbuena.es/img/avatar/juan.jpg",
        altAvatar: "mi avatar",
        habilidades: {
            html5: "HTML5",
            css3: "CSS3",
            javascript: "JavaScript",
            handlebars: "Handlebars",
            jquery: "jQuery",
            stylus: "Stylus"
        },
        profesion: "Desarrollador desde el 2013",
        trabajo: "juanbalbuena.es",
        webs:  {
            mama: "//juanbalbuena.es/img/Webs/mama.jpg",
            alborada: "//juanbalbuena.es/img/Webs/alborada.jpg",
            figStella: "Stella Maris",
            figAlborada: "Organización Alborada",
            altStella: "Web Stella Maris",
            altAlborada: "Web organización Alborada"
        },
        idiomas: {
            español: "Español:",
            nivelEspañol: "Nativo",
            gallego: "Gallego:",
            nivelGallego: "Nativo",
            ingles: "inglés:",
            nivelIngles: "medio(alto lectura)"
        },
        cursos: {
            mejorandola: "Mejorando.la",
            escuelait: "Escuela.it",
            aprobados:{
                diseno: "Curso de diseño Web online(2014)",
                backend: "Curso profesional de backend(2014)",
                django: "Curso de Django(2013-2014"
            },
        },
        nombreFooter: "Juan Balbuena 2014"


    };

    var origen = $("#mi-plantilla").html();
    var plantilla = Handlebars.compile( origen );

    $("#contenedor").html( plantilla(Juan) );

});
