function inicio()
{
    $("#mensaje").focusout(function(){
    if($('#mensaje') === ""){
        $("#$mensaje"").css('background', '#FFCECF');
    }
});
}