
function mostrar()
{
var mascota1;
var mascota2;
var peso1;
var peso2;
var pesototal;
mascota1=prompt("nombre de tu mascota");
mascota2=prompt("nombre de tu mascota");
peso1=prompt("tu primer mascota pesa");
peso2=prompt("tu segunda mascota pesa");
peso1=parseInt(peso1);
peso2=parseInt(peso2);
pesototal=peso1+peso2;
alert("tenes dos mascotas "+mascota1+" y "+mascota2+
" , que pesan "+peso1+" y "+peso2+" kilos, la suma de los kilos es "+pesototal);
;

}
