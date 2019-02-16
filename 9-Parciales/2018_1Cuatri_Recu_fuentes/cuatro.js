function mostrar()
{
    var oferta;
    var libros;
    var precio;
    var descuento;
    var tarjeta;
    oferta=parseInt(oferta);
    libros=parseInt(libros);
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    trajeta=parseInt(tarjeta);
    libros=prompt("cuantos libros va a comprar");
    precio=prompt("cual es el precio total");
    descuento=(15*precio)/100;
    tarjeta=(10*precio)/100;
    oferta=(10*precio)/100;
    if(libros>2&&precio>2000){alert("debe gastar si compra mas de 2000 "+oferta-precio+"si compra 2 mas de dos libros "+oferta-precio+"y si paga con tarjeta "+precio-oferta-descuento+tarjeta)}

}
