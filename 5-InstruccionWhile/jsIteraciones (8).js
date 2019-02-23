function mostrar()
{


	var positivo=0;
  var negativo=1;
  var numero;

  var respuesta=true;
  while(respuesta==true){
numero=prompt("Ingrese un numero");
numero=parseInt(numero);
if(numero>=0){
  positivo=positivo+numero
}else{
  negativo=negativo*numero
}
respuesta=confirm("desea continuar?")
  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
