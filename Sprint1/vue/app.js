Vue.component('ruta',{
    template:
    `<div>
    <h2>Ruta del dia {{ hoy }}</h2>
    <img src="./ruta.jpg" alt="RutaDelDia">
    <h2>Anuncios Parroquiales</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias facilis quas voluptas laudantium explicabo sint nostrum tempora odit in enim. Non facilis et dolores reprehenderit blanditiis? Tempore deleniti maiores est!</p>
    </div>`,

    // En un componente la data es una función que retorna un objeto
    data(){
        return{
            hoy: 'Martes'
        }
    }
}
)

const app = new Vue({
    el: '#app',
    data: {
      saludo: 'Hello Vue!',
      message: 'Personas en el bus: ',
      contador: 0,
      list:[1,2,3,4,5],
      hoy: 'Martes'
    },
    methods:{
        verificarSalida(){
            if(this.contador >=1){
                this.contador--;
            }
            else{
                alert("El bus está vacío")
            }
        },
        funcion2(){
            return 0;
        }
    }
  })