/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var uno;
    var dos;
    var tres;
    var resultado;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    resultado=uno+dos+tres;
    alert("la suma es "+resultado);
	
}
function Promedio () 
{
    var uno;
    var dos;
    var tres;
    var resultado;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    resultado=uno*dos*tres;
    alert("el promedio es "+resultado);
	
}
function PrecioFinal () 
{
    var uno;
    var dos;
    var tres;
    var resultado;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    resultado=((uno+dos+tres)*0.21)+uno+dos+tres;
    alert("total mas iva "+resultado);
	
}