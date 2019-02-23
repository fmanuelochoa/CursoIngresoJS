function mostrar()
{

  var contador=0;
  var contpositivo=0;
  var contnegativo=0;
  var numero;
  var sumanegativa=0;
  var sumapositiva=0;
  var contceros=0;
  var contpares=0;
  var respuesta=true;
  do{respuesta==true;
numero=prompt("escriba un numero");
numero=parseInt(numero);
  }while(isNaN(numero));
if(numero>0){
  sumapositiva+=numero;
  contpositivo++;
}else{
  if(numero<0){
    sumanegativa+=numero;
    contnegativo++
  }if(numero%2==0){
    contpares++;
    }respuesta=confirm("desea continuar?")


    }




}


	//declarar contadores y variables


	{


	}




//FIN DE LA FUNCIÓN
