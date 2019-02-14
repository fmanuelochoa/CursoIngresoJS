function mostrar()
{
    var precio;
    var porcentaje;
    var final;
    precio=prompt("ingrese el precio");
    porcentaje=prompt("ingrese descuento");
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);
    final=parseInt(final);
    final=(precio)-((precio*porcentaje)/100);
    final=document.getElementById("elPrecioFinal").value=final;


}
