//llamar las clases de html
const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");

//asigno función al boton de encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value); //var temporal para guardar la función encriptar
    mensaje.value = textoEncriptado; //var para llevarle la función al mensaje
    mensaje.style.backgroundImage = "none"; //quitar la img de fondo cuando haya texto
    inputTexto.value = ""; //para limpiar el texto
}

//función encriptar
function encriptar(textoEncriptar){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase(); //solo puede aceptar letras minusculas

    for(let i = 0; i < letras.length; i++){ //a recorrer la matriz para buscar las letras
        if(textoEncriptar.includes(letras[i][0])){ //si alguna letra es encontrada
            textoEncriptar = textoEncriptar.replaceAll(letras[i][0], letras[i][1]); 
            //reemplaza la letra por la encriptada
        }
    }
    return textoEncriptar;
}

//asigno función al boton de desencriptar
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//función desencriptar
function desencriptar(textoDesencriptar){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptar = textoDesencriptar.toLowerCase();

    for(let i = 0; i < letras.length; i++){
        if(textoDesencriptar.includes(letras[i][1])){ //si alguna encriptada es encontrada
            textoDesencriptar = textoDesencriptar.replaceAll(letras[i][1], letras[i][0]);
            //reemplaza la encriptada por la letra
        }
    }
    return textoDesencriptar;
}

//función para copiar el mensaje
function btnCopiar(){
    mensaje.select(); //seleccionamos el textarea
    navigator.clipboard.writeText(mensaje.value); //copiar el texto del textarea
    mensaje.value = ""; //limpiar el mensaje
    alert("El texto ha sido copiado"); //cuadro de alerta
}