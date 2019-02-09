/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var uno;
    var aumento;
    uno=document.getElementById("sueldo").value;
    aumento=document.getElementById("resultado").value
    uno=parseInt(uno);
    aumento=uno+(uno*0.1);
    aumento=document.getElementById("resultado").value=aumento;




	
}
