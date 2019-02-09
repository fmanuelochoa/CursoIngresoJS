/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var uno;
    var dos;
    var tres;
    var cuatro;
    var resultado;
    var resto;
    uno=document.getElementById("numeroDividendo").value;
    dos=document.getElementById("numeroDivisor").value;
    tres=parseInt(uno);
    cuatro=parseInt(dos);
    resultado=tres/cuatro;
    resto=tres%cuatro;
    alert("el resto es "+resto);
	
}
