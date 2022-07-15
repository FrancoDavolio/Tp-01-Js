let fraseCompleta = " ";

while(confirm("¿Desea ingresar palabras?")){
    let textoIngresado = prompt("Ingrese una palabra");
    fraseCompleta = (fraseCompleta + textoIngresado + "-" )
    document.write(fraseCompleta)
}