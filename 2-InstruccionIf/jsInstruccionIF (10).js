function mostrar()
{
	var nota;
	nota = Math.round(Math.random()*(10-1)+1)
	if(nota<=10&&nota>=9){
		alert("su nota es "+nota+" EXCELENTE");
	}else
	if(nota>=4&&nota<9){
		alert("su nota es "+nota+" APROBO");
	}else{
		alert("su nota es "+nota+" Vamos, la proxima se puede");
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN