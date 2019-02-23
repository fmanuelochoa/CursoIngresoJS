function mostrar()
{

  var bandera=true;
  var maximo;
  var minimo;
  var numero;
  do{
    (confirm("desea continuar"))
    numero=prompt("numeroo");
    numero=parseInt(numero);
  }
  while(isNaN(numero));
  if(bandera){
    bandera=false;
    maximo=numero;
    minimo=numero;
  }else{
    if(numero>maximo){
      maximo=numero
    }if(numero<minimo){
      minimo=numero;
    }
  }
	// declarar variables


	{


	}




}//FIN DE LA FUNCIÓN
