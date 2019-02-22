function mostrar()
{

var resultado;
  var numero = prompt("ingrese un número entre 0 y 10.");
  while(numero<0||numero>9)
  {
    numero=prompt("error");
  }while(numero>=0&&numero<10){

break;
  }
  document.getElementById("Numero").value=numero;





}//FIN DE LA FUNCIÓN
