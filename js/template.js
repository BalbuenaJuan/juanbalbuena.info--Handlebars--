/**
 * Created by Juan on 08/12/2014.
 */
$(document).ready(function(){
    var Juan = {
        nombre: "Juan Balbuena",
        descripcion: "Aprendiz de desarrollo Web, me encanta JavaScript y Django. Siempre mejorando mis habilidades, estoy libre para hacer proyectos",
        avatar: "//juanbalbuena.es/img/avatar/juan.jpg",
        altAvatar: "mi avatar",
        habilidades: [
            {habilidad: "HTML5"},
            {habilidad: "CSS3"},
            {habilidad: "JavaScript"},
            {habilidad: "Handlebars"},
            {habilidad: "jQuery"},
            {habilidad: "Stylus"}
        ],
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
        idiomas: [
            {lenguaje: "Español:", nivel: "Nativo"},
            {lenguaje: "Gallego:", nivel: "Nativo"},
            {lenguaje: "inglés:", nivel: "Medio(alto lectura)"}
        ],
        cursos: [
            {escuela: "Mejorando.la", area: "Curso de diseño Web online(2014)"},
            {escuela: "Mejorando.la", area: "Curso profesional de backend(2014)"},
            {escuela: "Escuela.it", area: "Curso de Django(2013-2014"}
        ],
        nombreFooter: "Juan Balbuena 2014"


    };

    var origen = $("#mi-plantilla").html();
    var plantilla = Handlebars.compile( origen );

    $("#contenedor").html( plantilla(Juan) );

});
