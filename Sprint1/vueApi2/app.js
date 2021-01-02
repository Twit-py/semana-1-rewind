const app = new Vue({
    el:"#app",
    data:{
        texto: '',
        lista:[]
        //almacenamiento
    },
    methods:{
        async agregarElemento(){
            let resultadoApi =  await fetch('http://www.omdbapi.com/?apikey=6c43a029&t=' + this.texto);
            let resultadoJSON = await resultadoApi.json();

            // Agregar el resultado de la búsqueda a la lista de reproduccción
            // Solo se agrega si se encuentra resultado real
            if(resultadoJSON['Response']==="True"){
                // Hacer el push
                this.lista.push({
                    titulo: resultadoJSON['Title'],
                    anho: resultadoJSON['Year'],
                    liked: false
                })
            }
            else{
                alert('No se encontró resultado')
            }
            this.texto = '';

            localStorage.setItem('almacenamiento', JSON.stringify(this.lista));
        },
        marcarLike(posicion){
            if (this.lista[posicion].liked){
                this.lista[posicion].liked = false;
            }else{
                this.lista[posicion].liked = true;
            }

            localStorage.setItem('almacenamiento', JSON.stringify(this.lista));
        },
        eliminarElemento(posicion){
            this.lista.splice(posicion,1)   
            localStorage.setItem('almacenamiento', JSON.stringify(this.lista));
        }
    },
    created(){
        let datosAlmacenados = JSON.parse(localStorage.getItem('almacenamiento'));
        if(datosAlmacenados==null){
            this.lista = []
        }else{
            this.lista = datosAlmacenados
        }
    }
}
)