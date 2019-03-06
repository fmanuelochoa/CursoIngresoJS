function mostrar()
{

  var contador=0;
  var contpositivo=0;
  var contnegativo=0;
  var numero;
  var sumanegativa=0;
  var sumapositiva=0;
  var resultado;
  var contceros=0;
  var contpares=0;
  var respuesta=true;
  var promediopos;
  var resultadoneg;
  var diferencia;
  
  do{
    
    numero=prompt("escriba un numero");
    numero=parseInt(numero);
    while(!isNaN){
      numero=prompt("escriba un numero correcto");
      numero=parseInt(numero);
    }

    if(numero>0){
      sumapositiva = sumapositiva + numero;
      contpositivo++;
    }else
      if(numero<0){
        sumanegativa = sumanegativa + numero;
        contnegativo++
      }else{
        contceros++
      }
      if(numero % 2== 0 && numero != 0){

        contpares++;
        }



  }while(respuesta=confirm("desea continuar?"));
  resultado = sumapositiva / contpositivo;
  resultadoneg = sumanegativa / contnegativo;
  diferencia = (sumapositiva) - (sumanegativa);

  document.write("La suma de negativos es: "+sumanegativa+"<br>");
	document.write("La suma de positivos es: "+sumapositiva+"<br>");
	document.write("La cantidad de positivos es: "+contpositivo+"<br>");
	document.write("La cantidad de negativos es: "+contnegativo+"<br>");
	document.write("La cantidad de ceros es: "+contceros+"<br>");
	document.write("La cantidad de pares es: "+contpares+"<br>");
	document.write("El promedio de negativos es :"+resultadoneg+"<br>");
	document.write("El promedio de los positivos es: "+resultado+"<br>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia+"<br>");




}


    







	//declarar contadores y variables


	


  
  





//FIN DE LA FUNCIÓN
