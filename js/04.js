let suma = 0;

while (confirm("¿Desea ingresar un numero?")) {
  let numero = parseInt(prompt("Ingrese el numero"));
  if (numero != Number(numero)) {
    alert("No es un numero");
  } else {
    suma = suma + numero;
  }
}
document.write(" " + suma);
