function mostrar()
{
    var amigos
    var total;
    var totalpropina;
    var totaliva;
    total=prompt("cuanto gastaron en total");
    amigos=prompt("¿cuantos son?")
    amigos=parseInt(amigos);
    total=parseInt(total);
    totalpropina=parseInt(totalpropina);
    totaliva=parseInt(totaliva);
    totalpropina=(10 * total)/100;
    totaliva=(21 * total)/100;
    alert(" con la propina "+totalpropina+" y el iva "+totaliva+
        " deben pagar cada uno "+(total+totaliva+totalpropina)/amigos);




}
