elementos = parseInt(prompt("ingrese el numero de elementos en la lista"))

arreglo = [];
for(let elemento = 0; elemento<elementos; elemento++){
    arreglo.push(prompt('Ingrese el elemento: ' + (elemento+1)))
}

// Buscar el máximo elemento de la lista
var maximo = -999;
for(var i = 0; i<arreglo.length; i++){
    if(arreglo[i]>maximo){
        maximo = arreglo[i];
    }
}

alert("El número máximo de la lista es: "+maximo)
