Vue.component('mis-peliculas',{
    template:
    `
    <div>
    <!-- Caja de búsqueda y botón -->
        <div class="contenedor">
            <div class="input-group mb-3">
                <input 
                    id="textoAgregar" type="text" class="form-control" 
                    placeholder="Nombre de la película" aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    v-model = "texto"
                    @keyup.enter = "agregarElemento"
                    >
                <button 
                    id="botonAgregar" 
                    class="btn btn-outline-secondary" 
                    type="button"
                    @click="agregarElemento">Agregar</button>
            </div>
        </div>

    <div id="contenedorRta" class="contenedorRta">
        <div class="alert" role="alert"
        v-for="(item,posicion) of lista" :key="item.id"
        :class="[item.liked ? 'alert-primary' : 'alert-warning']">
            <div class="d-flex justify-content-between align-items-baseline">
                <div>
                    {{ item['titulo']}}, {{item['anho']}}
                    <div> 
                        <h3 v-if="item.liked">Me Gusta!</h3>
                        <h3 v-else>No me gusta!</h3>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-success" 
                    @click="marcarLike(posicion)">+</button>
                    <button type="button" class="btn btn-danger" 
                    @click="eliminarElemento(posicion)">-</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
    data(){
        return {
            texto: '',
            lista:[]
            //almacenamiento
        }
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
})