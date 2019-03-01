function mostrar()
{
    var numero;
    var numero2;
    var suma;
    var resta;
    numero=prompt("ingrese numero 1");
    numero2=prompt("ingrese el numero 2");
    numero=parseInt(numero);
    numero2=parseInt(numero2);
    if(numero==numero2){
        alert("concatenados "+numero+numero2);
    }else
        if(numero>numero2){
            resta = (numero - numero2);
            alert("la resta es: "+resta);
        }
        else
        {
        suma = numero2 + numero;

        if(suma>10){
            alert("la suma es: "+suma+" y supero el 10");

        }else{
            alert("la suma no supero el 10 y es: "+suma);
        }

    }
    }

