function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
        case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        case "Agosto":
    case "Julio":
    alert ("este mes tiene 30 o mas dias ");
    break;
    case "Febrero":
    alert ("este no tiene mas de 29 dias ");
    break;
    
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN