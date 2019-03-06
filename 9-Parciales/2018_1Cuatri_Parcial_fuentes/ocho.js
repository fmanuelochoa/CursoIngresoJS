function mostrar()
{
    var numero;
    var letra;
    var cantidadpar;
    var cantidadimpar;
    var cantidadcero;
    var promediopositivo;
    var sumanegativo;
    var bandera;
    var mayor;
    var menor;
    var letramayor;
    var letramenor;
    var cantidadpositivo;
    var respuesta = true;
    bandera = true;
    var sumapositivo;
    cantidadpar=0;
    cantidadimpar=0;
    cantidadcero=0;
    cantidadpositivo=0
    sumapositivo=0;
    sumanegativo=0;
    promediopositivo=0;

    

    do{        
        numero=prompt("ingrese numero");
        numero=parseInt(numero);
        while(isNaN(numero) || numero > 100 || numero < -100)
        {
        numero=prompt("re-ingrese numero");
        numero=parseInt(numero);

    }
    letra=prompt("ingrese letra");
    while(!isNaN(letra)){
        letra=prompt("re-ingrese letra");
    }

        if (numero % 2 == 0)
        {
            cantidadpar++;
        }
        else
        {
            cantidadimpar++;
        }
        if (numero == 0)
        {
            cantidadcero++;
        }
        else if (numero > 0)
        {
            sumapositivo = sumapositivo + numero;
            cantidadpositivo++;
        }
        else
        {
            sumanegativo = sumanegativo + numero;
        }
        if (bandera == true)
        {
            menor = numero;
            letramenor = letra;
            mayor = numero;
            letramayor = letra;
            bandera = false
        }
        if (numero > mayor)
        {
            mayor = numero;
            letramayor = letra;
        }
        if (numero < menor)
        {
            menor = numero;
            letramenor = letra;
        }




        

    }while(respuesta==confirm("desea continuar cargando datos"));
    

    promediopositivo = sumapositivo / cantidadpositivo;
    
    document.write("Cantidad de números pares "+cantidadpar+"<br>");
    document.write("Cantidad de números impares "+cantidadimpar+"<br>");
    document.write("Cantidad de ceros "+cantidadcero+"<br>");
    document.write("Promedio de positivos "+promediopositivo+"<br>");
    document.write("Suma de números negativos "+sumanegativo+"<br>");
    document.write("El numero mayor es "+mayor+" y la letra es "+letramayor+"<br>");
    document.write("El numero menor es "+menor+" y la letra es "+letramenor+"<br>");
    

  


    
    


    






    





}
