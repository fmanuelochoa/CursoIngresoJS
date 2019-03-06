/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero;
    var resultado;
    numero=document.getElementById("importe").value;
    numero=parseInt(numero);
    resultado=parseInt(resultado);
    resultado=numero-(numero*0.25);
    resultado=document.getElementById("resultado").value=resultado;

	
}
