function mostrar()
{

	var contador;
	var sexo;
	var nota;
	var total;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadVarones;
	contador=0;
	notaMasBaja = 0;
	cantidadVarones = 0;
	promedio = 0;
	total=0;

	
	do{
		
		sexo=prompt("sexo ingrese");
		contador++;
		while(sexo!="m" && sexo!="f"){
			sexo=prompt("re-ingrese sexo");
		}
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		while(isNaN(nota) || nota > 10 || nota < 0){
			nota=prompt("re-ingrese nota");
			nota=parseInt(nota);
		}
		
		if(contador==1)
		{
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}
		else
		{
			if (nota < notaMasBaja)
			{
				notaMasBaja = nota;
				sexoNotaMasBaja = sexo;
			}

			if (nota >= 6 && sexo == "m")
			{
				cantidadVarones++;
			}
		}
		total = total + nota;

	}while(contador<5);
	promedio = total / contador;

	alert("Promedio de notas: "+promedio+". Nota mas baja "+notaMasBaja+" y el sexo "+sexoNotaMasBaja+". Cantidad de varones con nota mayor a 6: "+cantidadVarones);
}

	


	


	


