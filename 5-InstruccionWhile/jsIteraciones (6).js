function mostrar()
{

	var cont=0;
  var acumulador=0;
  var promedio;
  var numero;
  while(cont<5){
    cont++;
    numero=prompt("el numero");
    numero=parseInt(numero);

    while(isNaN(numero))
    {
      numero=prompt("el numero")
    numero=parseInt(numero)}



    acumulador+=numero}

  promedio=acumulador/cont;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio/5;

}//FIN DE LA FUNCIÓN
