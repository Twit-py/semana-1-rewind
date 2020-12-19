/* Declaración de la función que al darle clic a buscar recupera el texto
*  params: none
*  return: string
*/
const traerTexto = () =>{
    const botonBuscar = document.getElementById('botonBuscar');
    botonBuscar.addEventListener('click', (evento) => {
        //Funcion del evento
        const textoBuscar = document.getElementById('textoBuscar');
        valorTextoBuscar = textoBuscar.value;
        llamadaApi(valorTextoBuscar);
    });
}

const llamadaApi = async (texto) =>{
    const resultadoApi = await fetch('http://www.omdbapi.com/?apikey=6c43a029&t=' + texto);
    const resultadoJson = await resultadoApi.json();

    if(resultadoJson['Response']==="True"){

        const titulo = resultadoJson['Title'];
        const anho = resultadoJson['Year'];
        const sinopsis = resultadoJson['Plot'];
        const poster = resultadoJson['Poster'];

        document.getElementById('imagenRespuesta').src=poster;
        document.getElementById('anho').innerHTML=anho;
        document.getElementById('sinopsis').innerHTML=sinopsis;
        document.getElementById('titulo').innerHTML=titulo;
        
        contenedorPrincipal = document.getElementById('contenedorBig');
        
        if(contenedorPrincipal.style.display === ""){
            contenedorPrincipal.style.display="block";
        }
    }
    else{
        alert('No se encontró ninguna película')
    }
}

// http://www.omdbapi.com/?apikey=6c43a029&t={tituloBusqueda}

traerTexto();
