function mostrar()
{

	var contador=0;
	var numero;
	var suma=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		contador++;
		suma=parseInt(suma);
		suma=suma+numero;
		respuesta=prompt("Continuar ingresando datos?[si |no]");
	}





document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN
