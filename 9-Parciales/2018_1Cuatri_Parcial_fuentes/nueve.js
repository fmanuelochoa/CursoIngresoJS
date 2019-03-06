function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var cantidadpar;
    var marcapesada;
    var cantidadcero;
    var promediopeso;
    var maximo;
    var minimo;
    var respuesta=true;
    var productopesado;
    var contadorpromedio;
    var bandera;
    cantidadpar=0;
    cantidadcero=0;
    promediopeso=0;
    contadorpromedio=0;
    resultado=0;
    bandera=true;
    





    do{
        marca=prompt("ingrese una marca");
        peso=prompt("ingrese peso");
        peso=parseInt(peso);
        while(isNaN(peso) || peso < 1 || peso > 100){
            peso=parseInt(peso);
            peso=prompt("re-ingrese el peso");
        }
        temperatura=parseInt(temperatura);
        temperatura=prompt("ingrese temperatura");
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30){
            temperatura=parseInt(temperatura);
            temperatura=prompt("re-ingrese temperatura");
        }
        if(temperatura % 2 == 0 && temperatura != 0){
            cantidadpar++;
        }
        contadorpromedio++;
        promediopeso = promediopeso + peso;

        if(marcapesada < peso){
            marcapesada = marca;
            productopesado = peso;

        }
        if(temperatura < 0){
            cantidadcero++;
        }
        if(contadorpromedio == 1){
            productopesado = peso;
            marcapesada = marca;
            maximo = peso;
            minimo = peso;


        }
        if(bandera == true){
            maximo=peso;
            minimo=peso;
            bandera=false;
        }
        if(peso > maximo){
            maximo = peso
        }
        if(peso < minimo){
            minimo = peso
        }




        

    }while(respuesta=confirm("Desea Ingresar mas datos?"))

    resultado = promediopeso / contadorpromedio;
	document.write("Cantidad de temperaturas pares: "+cantidadpar+"<br>");
	document.write("Marca del producto mas pesado: "+marcapesada+"<br>");
	document.write("Cantidad de productos que se conservan a menos de 0 grados: "+cantidadcero+"<br>");
	document.write("Promedio de peso de productos: "+resultado+"<br>");
	document.write("Peso maximo: "+maximo+"<br>");
	document.write("Peso minimo: "+minimo+"<br>");


}
