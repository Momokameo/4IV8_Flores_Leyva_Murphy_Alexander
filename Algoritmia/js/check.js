function check(formulario){
    if(formulario.nombre.value.length <= 2){
        alert("Escriba más de un carácter en el campo correspondiente.");
        formulario.nombre.focus();
    return false;}
    //Letras
    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" 
    + "qwertyuioasdfghjklzxcvbnm";
    var checkStr = formulario.nombre.value;
    var allValid = true;
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for( var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;
        if(j == checkOk.length){
            allValid = false;
            break;}
    }
    if(!allValid){
        alert("Escriba solo letras en el campo correspondiente.");
        formulario.nombre.focus();
        return false;}
    //Numeros
    var checkOk = "1234567890";
    var checkStr = formulario.edad.value;
    var allValid = true;
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;
        if(j == checkOk.length){
            allValid = false;
            break;}
    }
    if(!allValid){
        alert("Escriba solo números en el campo correspondiente.");
        formulario.edad.focus();
        return false;}
    //Mail
    var txt = formulario.email.value;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email" + (b.test(txt)?"":" no ") + " válido");
    return b.test(txt);
}