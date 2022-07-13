let nota = parseInt(prompt("Ingresar una nota en números del 0 al 10"));

switch (nota) {
    case 0,1,2:
        alert("Muy deficiente");
        break;
    case 3,4:
        alert("Insuficiente");
        break;
    case 5,6:
        alert("Insuficiente");
        break;
    case 7,8:
        alert("Insuficiente");
        break;
    case 9,10:
        alert("Insuficiente");
        break;
    default:
        if (nota < 11) {
            document.write("Número Erróneo.")
        } else {
            document.write("Introduce un número válido.")
        }
        break;
}
