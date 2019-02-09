/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	 
    var uno;
    var dos;
    var tres;
    var cuatro;
    var resultado;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    tres=parseInt(uno);
    cuatro=parseInt(dos);
    resultado=tres+cuatro;
    alert("la suma es "+resultado);
	
}

function restar()
{ 
    var uno;
    var dos;
    var tres;
    var cuatro;
    var resultado;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    tres=parseInt(uno);
    cuatro=parseInt(dos);
    resultado=tres-cuatro;
    alert("la resta es "+resultado);
	
}

function multiplicar()
{ 
    var uno;
    var dos;
    var tres;
    var cuatro;
    var resultado;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    tres=parseInt(uno);
    cuatro=parseInt(dos);
    resultado=tres*cuatro;
    alert("la multiplicacion es "+resultado);
	
}

function dividir()
{
    var uno;
    var dos;
    var tres;
    var cuatro;
    var resultado;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    tres=parseInt(uno);
    cuatro=parseInt(dos);
    resultado=tres/cuatro;
    alert("la division es "+resultado);
	
}

