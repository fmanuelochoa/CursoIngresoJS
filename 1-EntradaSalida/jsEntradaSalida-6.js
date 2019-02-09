/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

