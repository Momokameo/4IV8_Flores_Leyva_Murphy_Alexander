//Uno
function problema1(){
    var p1_input = document.querySelector('#p1-input').value;
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';
    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra; 
    });
    //UnoR
    document.querySelector('#p1-output').textContent = p1_res;
}
//Dos
function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    v1 = v1.sort(function (a, b){
        return b-a;
    });
    v2 = v2.sort(function (a, b){
        return b-a;
    });
    v2 = v2.reverse();
    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    document.querySelector('#p2-output').textContent =
    'Producto Escalar Minimo : '+ p2_producto;
}
//DosX
function validarentrada(palabra){
    var longitud = palabra.length;
    for(var i=0;i<longitud;i++){
        if((i==0&&palabra.charCodeAt(i)==32)||(i==longitud-1&&palabra.charCodeAt(i)==32)||(palabra.charCodeAt(i)==32&&palabra.charCodeAt(i-1)==32)){
            if(i==0){
                alert("No coloque espacios al inicio de la entrada.");
            }
            else{
                if(i==longitud-1){
                    alert("No coloque espacios al final de la entrada.");
                }
                else{
                    alert("No coloque espacios entre las palabras.");
                }
            }
            return false;
        }
    }
    return true;
}
//Tres
function problema3(){
    var p3_input = document.querySelector('#p3-input').value;
    var longitud;
    var maximo = 0;
    var aux;
    var cubeta = [27];
    var p3_array;
    var respuesta;
    var aux2=0;
    var aux_array;
    var bandera;
    //TresX
    if(validarentrada(p3_input)){
        p3_array = p3_input.split(',');
        p3_array.forEach(function (palabra){
            for(var j=0;j<26;j++){
                cubeta[j] = false;
            }
            aux = 0;
            longitud = palabra.length;
            for(var j=0;j<longitud;j++){
                if(!cubeta[palabra.charCodeAt(j)-65]){
                    aux++;
                    cubeta[palabra.charCodeAt(j)-65] = true;
                }
            }
            if(aux>maximo){
                respuesta = palabra;
                maximo = aux;
                aux2 = 1;
            }
            else{
                bandera = true;
                aux_array = respuesta.split(',');
                aux_array.forEach(function(palabra_aux){
                    if(palabra_aux==palabra){
                        bandera = false;
                    }
                })
                if(bandera == true){
                    if(aux==maximo){
                        aux2++;
                        if(aux2==2){
                            respuesta+=" y ";
                            respuesta+=palabra;
                        }
                        else{
                            respuesta = palabra + " , " + respuesta;
                        }
                    }
                }
            }
        });
        document.querySelector('#p3-output').textContent = 'La palabra con más caracteres únicos es: ' + respuesta + '.';
    }
    else{
        document.querySelector('#p3-input').value = "";
        document.querySelector('#p3-output').textContent = 'Esperando respuesta...';
    }
}