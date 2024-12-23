let productos = [
    {
    id: 1,
    foto: "../assets/img/pijamamujernegro_1.jpg",
    alt: "pijama Camila negro",
    categoria: "mujer",
    modelo: "Camila",
    descripcion: "Pijama de saten negro con detalles en blanco, manga larga",
    precio:"$ 68.100",
    talle:"S",
    stock: true,
    favorito: false
    },
    {
    id: 2,
    foto: "../assets/img/pmalgodongris2.jpg",
    alt: "pijama Luna gris",
    categoria: "mujer",
    modelo: "Luna",
    descripcion: "Pijama algodón pima, con botones, gris",
    precio:"$ 35.500",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 3,
    foto: "../assets/img/pmalgodonrosapintitas3.jpg",
    alt: "pijama Sol rosa",
    categoria: "mujer",
    modelo: "Sol",
    descripcion: "Pijama algodón pima, beige con puntos blancos",
    precio:"$ 40.800",
    talle:"S",
    stock: true,
    favorito: false
    },
    {
    id: 4,
    foto: "../assets/img/pmcamiserorojo4.jpg",
    alt: "pijama Susan rojo",
    categoria: "mujer",
    modelo: "Susan",
    descripcion: "Pijama camisero de saten rojo",
    precio:"$ 59.850",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 5,
    foto: "../assets/img/pmcelestesaten5.jpg",
    alt: "pijama Celeste saten",
    categoria: "mujer",
    modelo: "Celeste",
    descripcion: "Pijama de saten celeste con detalles en negro",
    precio:"$ 63.999",
    talle:"S",
    stock: false,
    favorito: false
    },
    {
    id: 6,
    foto: "../assets/img/pmverde6.jpg",
    alt: "pijama Virginia verde",
    categoria: "mujer",
    modelo: "Virginia",
    descripcion: "Pijama de saten verde manga larga",
    precio:"$ 70.980",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 7,
    foto: "../assets/img/pmsatencortorosa7.jpg",
    alt: "pijama Luana rosa saten corto",
    categoria: "mujer",
    modelo: "Luana",
    descripcion: "Pijama corto de saten rosa, con top",
    precio:"$ 60.000",
    talle:"S",
    stock: true,
    favorito: false
    },
    {
    id: 8,
    foto: "../assets/img/pmsatenrosa8.jpg",
    alt: "pijama Mirtha rosa encaje negro",
    categoria: "mujer",
    modelo: "Mirtha",
    descripcion: "Pijama rosa con encaje negro y bata haciendo juego",
    precio:"$ 140.860",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 9,
    foto: "../assets/img/phazul9.jpg",
    alt: "pijama Luciano estampa azul",
    categoria: "hombre",
    modelo: "Luciano",
    descripcion: "Pijama algodon, manga larga con estampa",
    precio:"$ 60.890",
    talle:"L",
    stock: true,
    favorito: false
    },
    {
    id: 10,
    foto: "../assets/img/pijamahombrealgodon.jpg",
    alt: "pijama Olvaldo amarillo",
    categoria:  "hombre",
    modelo: "Osvaldo",
    descripcion: "Pijama algodón pima amarillo, manga larga",
    precio:"$ 59.000",
    talle:"XL",
    stock: true,
    favorito: false
    },                            
    {
    id: 11,
    foto: "../assets/img/phcorto11.jpg",
    alt: "pijama Ceferino corto gris",
    categoria:  "hombre",
    modelo: "Ceferino",
    descripcion: "Pijama algodón pima gris, escote en v, manga corta y short",
    precio:"$ 56.790",
    talle:"S",
    stock: true,
    favorito: false
    },
    {
    id: 12,
    foto: "../assets/img/phcuadros12.jpg",
    alt: "pijama Sam a cuadros",
    categoria:  "hombre",
    modelo: "Sam",
    descripcion: "Pijama algodón, pantalón a cuadros y remera manga larga negra",
    precio:"$ 55.050",
    talle:"L",
    stock: true,
    favorito: false
    },       
    {
    id: 13,
    foto: "../assets/img/phgrisalgodon13.jpg",
    alt: "pijama Milo gris estampado",
    categoria:  "hombre",
    modelo: "Milo",
    descripcion: "Pijama algodón gris estampa LooneyTunes",
    precio:"$ 55.100",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 14,
    foto: "../assets/img/phnaranja14.jpg",
    alt: "pijama Vicente estampado",
    categoria:  "hombre",
    modelo: "Vicente",
    descripcion: "Pijama de algodón pima estampado",
    precio:"$ 56.990",
    talle:"XXL",
    stock: true,
    favorito: false
    },
    {
    id: 15,
    foto: "../assets/img/phnavidad15.jpg",
    alt: "pijama Santa navideño",
    categoria:  "hombre",
    modelo: "Santa",
    descripcion: "Pijama de algodón pima, combinado navideño",
    precio:"$ 65.000",
    talle:"M",
    stock: true,
    favorito: false
    },
    {
    id: 16,
    foto: "../assets/img/phpato16.jpg",
    alt: "pijama Lucas estampado",
    categoria:  "hombre",
    modelo: "Lucas",
    descripcion: "Pijama de algodón estampa pato",
    precio:"$ 57.600",
    talle:"S",
    stock: true,
    favorito: false
    },
    {
    id: 17,
    foto: "../assets/img/pijamanina.jpg",
    alt: "pijama Mia florcitas",
    categoria: "kids",
    modelo: "Mia",
    descripcion: "Pijama de algodón pima con estampa de florcitas",
    precio:"$ 50.089",
    talle:"8",
    stock: true,
    favorito: false
    },
    {
    id: 18,
    foto: "../assets/img/pnosorayado.jpg",
    alt: "pijama Belen estampa oso",
    categoria: "kids",
    modelo: "Belen",
    descripcion: "Pijama de algodón pima con estampa de rayas y oso gris",
    precio:"$ 60.100",
    talle:"16",
    stock: true,
    favorito: false
    },
    {
    id: 19,
    foto: "../assets/img/pnanimalitos19.jpg",
    alt: "pijama estampa animalitos",
    categoria: "kids",
    modelo: "Animalitos",
    descripcion: "Pijama de algodón pima con estampa animalitos",
    precio:"$ 55.700",
    talle:"4",
    stock: true,
    favorito: false
    },
    {
    id: 20,
    foto: "../assets/img/pnautitos20.jpg",
    alt: "pijama estampado colores",
    categoria: "kids",
    modelo: "Colores",
    descripcion: "Pijama de algodón pima con estampa multicolor",
    precio:"$ 49.900",
    talle:"4",
    stock: true,
    favorito: false
    },
    {
    id: 21,
    foto: "../assets/img/pnbananas21.jpg",
    alt: "pijama estampa bananas",
    categoria:"kids",
    modelo: "Bananas",
    descripcion: "Pijama de algodón pima con estampa de bananas",
    precio:"$ 55.000",
    talle:"6",
    stock: true,
    favorito: false
    },
    {
    id: 22,
    foto: "../assets/img/pnenaamarillo22.jpg",
    alt: "pijama Bella estampado amarillo",
    categoria: "kids",
    modelo: "Bella",
    descripcion: "Pijama en algodón pima amarillo con florcitas",
    precio:"$ 60.900",
    talle:"10",
    stock: true,
    favorito: false
    },                            
    {
    id: 23,
    foto: "../assets/img/pngrinch23.jpg",
    alt: "pijama estampa grinch",
    categoria: "kids",
    modelo: "Grinch",
    descripcion: "Pijama de algodón pima con estampa Grinch",
    precio:"$ 51.1000",
    talle:"10",
    stock: true,
    favorito: false
    },
    {
    id: 24,
    foto: "../assets/img/pnnavidad24.jpg",
    alt: "pijama estampa navidad",
    categoria: "kids",
    modelo: "Navidad",
    descripcion: "Pijama algodón pima con estampa navideña",
    precio:"$ 47.900",
    talle:"1",
    stock: true,
    favorito: false
    }  
     
    ]



//creo un objeto vacio para luego separar alli por categoria
const categorias = {};

// Recorre productos
productos.forEach((producto) => {
    // esto crea las categorias
    if (!categorias[producto.categoria]) {
        categorias[producto.categoria] = [];
    }
    // Agrega el producto a la categoría correspondiente
    categorias[producto.categoria].push(producto);
});

console.log(categorias);

let productosMujer = categorias.mujer
console.log(productosMujer)
let productosHombre  = categorias.hombre
console.log(productosHombre)
let productosKids  = categorias.kids
console.log(productosKids)



// Función para saludar (revisa si hay nombre guardado y sino lo pide)
function saludarUsuario() {
    const nombreYaGuardado = localStorage.getItem('nombreUsuario');

    // Si no hay nombre guardado, muestra la ventana
    if (!nombreYaGuardado ) {
        document.getElementById('ventana-modal').style.display = 'flex';
    } else {
        mostrarSaludo(nombreYaGuardado );//si ya hay muestra cartelito 
    }
}

// Función para guardar el nombre ingresado
function guardarNombre() {
    const nombreUsuarioInput = document.getElementById('nombreUsuarioInput');
    const nombreUsuario = nombreUsuarioInput.value.trim();// guarda el nombre y le quita los espacios antes y despues

    if (nombreUsuario) {
        // Guardar el nombre en localStorage
        localStorage.setItem('nombreUsuario', nombreUsuario);

        // Cerrar ventana
        document.getElementById('ventana-modal').style.display = 'none';

        // Momuestra cartelito 
        mostrarSaludo(nombreUsuario);
    
    }
}

// Función para mostrar el saludo
function mostrarSaludo(nombreUsuario) {
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    const mostrarNombreUsuario = document.getElementById('mostrarNombreUsuario');

    mostrarNombreUsuario.textContent = nombreUsuario;
    mensajeBienvenida.style.display = 'block';
}

// Llama a la función de saludo cuando la página esté lista
document.addEventListener('DOMContentLoaded', saludarUsuario);

saludarUsuario()

///-----------------------------------------------------------------

// listado de id para agregar fotos (aca consume la api para reseñas)
let idImgUsuarios = ["foto-usuario1","foto-usuario2","foto-usuario3"];
console.log(typeof idImgUsuarios);
    
for (var i=0; i<idImgUsuarios.length;i++){

   let fotoDeUsuarios  = idImgUsuarios[i];

    //llama api
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => {
    const usuario = data.results[0];

    // foto del usuario aleatorio
    const fotoUsuario = usuario.picture.medium;

    // agrego la foto a la reseña
    document.getElementById(fotoDeUsuarios).src = fotoUsuario; 
    })

    .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
    });

}


// con esto cargo los articulos por categoria

function agregarCardACategoria(idACapturar, categoria) {

    let cardsCategoriaACrear = categoria
    console.log(cardsCategoriaACrear)
    console.log(idACapturar)

    const contenedor = document.getElementById(idACapturar);
    cardsCategoriaACrear.forEach((producto) => {
    contenedor.innerHTML += `<div id="${producto.id}" class="card">   
                                        <img src="${producto.foto}" class="card-${producto.categoria}" alt="${producto.alt}">
                                        <p>${producto.modelo}</p>
                                        
                                        <h3>${producto.precio}</h3>
                                        <a onclick="agregarAlCarrito(${producto.id})" id="boton-agregar-carrito" href="#" class="botonagregar">Agregar al carrito</a>

                                    </div>`;
       
 })
}

agregarCardACategoria("mujer",productosMujer)
agregarCardACategoria("hombre",productosHombre)
agregarCardACategoria("nino",productosKids)

