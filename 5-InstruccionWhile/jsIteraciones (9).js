function mostrar()
{

  var bandera=true;
  var maximo;
  var minimo;
  var numero;
  var resultado=true;
  
  
  do{
   
    numero=prompt("numeroo");
    numero=parseInt(numero);

  } while(isNaN(numero));
    if(bandera==true){
    bandera=false;
    maximo=numero;
    minimo=numero;
  }
    if(numero>maximo){
      maximo=numero;
    }else 
    if(numero<minimo){
      minimo=numero;
    }


resultado=confirm("desea continuar");





}


  
