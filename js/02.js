let nota = parseInt(prompt("Ingresar una nota en números del 0 al 10"));

switch (nota) {
  case 0:
  case 1:
  case 2:
    alert("Muy deficiente");
    break;
  case 3:
  case 4:
    alert("Insuficiente");
    break;
  case 5:
  case 6:
    alert("Insuficiente");
    break;
  case 7:
  case 8:
    alert("Insuficiente");
    break;
  case 9:
  case 10:
    alert("Insuficiente");
    break;
  default:
    if (nota < 11) {
      document.write("Número Erróneo.");
    } else {
      document.write("Introduce un número válido.");
    }
    break;
}
