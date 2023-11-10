console.log("lu")
const imagen1 = document.getElementById("imagen1")
const izquierda = document.querySelector(".izquierda")
const derecha = document.querySelector(".derecha")
const volver = document.querySelector(".volver")
const info_container = document.querySelector(".desc")
const desc = document.querySelector("#descripcion1")
const nombre_b = document.querySelector(".boton")
const titulo = document.getElementById("nombre")
const personaje = document.querySelector("#personajeid")

const informacion = [{ descripcion: "Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3", imagen: "./imagenes/golem.png", nombre: "Golem" },
    { descripcion: "Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe", imagen: "./imagenes/Pekka.webp", nombre: "Pekka" },
    { descripcion: "Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.", imagen: "./imagenes/caballero.png", nombre: "Caballero" },
    { descripcion: "es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha", imagen: "./imagenes/bruja.png", nombre: "Bruja Nocturna" },
    { descripcion: 'Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo', imagen: "./imagenes/los-pillos.png", nombre: "Los pillos" },
    { descripcion: "es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior", imagen: "./imagenes/goblin.webp", nombre: "Goblin" },
    { descripcion: "Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5", imagen: "./imagenes/arquero.png", nombre: "Arquero" },
    { descripcion: "es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro", imagen: "./imagenes/montaPuercos.webp", nombre: "Monta Puercos" },
    { descripcion: "Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal", imagen: "./imagenes/miner_info.webp", nombre: "Minero"},
    { descripcion: "Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.", imagen: "./imagenes/principe.png", nombre:"Príncipe"},
    { descripcion: "dragoncito", imagen: "./imagenes/dragon.png",nombre:"Dragon bebé" }]

let contador = 0;

derecha.addEventListener("click", () => {
    contador += 1
    const { imagen, descripcion, nombre } = informacion[contador];
    imagen1.setAttribute("src", imagen)
    desc.textContent = descripcion
    titulo.textContent = nombre
    nombre_b.textContent = nombre
    if (contador == 0) {
        izquierda.setAttribute("disabled", "true")
    } else {
        izquierda.removeAttribute("disabled")
    }
    if (contador == informacion.length - 1) {
        derecha.setAttribute("disabled", "true")
    } else {
        derecha.removeAttribute("disabled")
    }
    localStorage.setItem("i",contador)
})

izquierda.addEventListener("click", () => {
    contador -= 1
    const { imagen, descripcion, nombre } = informacion[contador];
    imagen1.setAttribute("src", imagen)
    desc.textContent = descripcion
    titulo.textContent = nombre
    nombre_b.textContent = nombre
    if (contador == 0) {
        izquierda.setAttribute("disabled", "true")
    } else {
        izquierda.removeAttribute("disabled")
    }
    if (contador == informacion.length - 1) {
        derecha.setAttribute("disabled", "true")
    } else {
        derecha.removeAttribute("disabled")
    }
    localStorage.setItem("i", contador)
})/*Escuchar evento*/


window.addEventListener("load", () => {
    if (localStorage.getItem("i")) {
        contador = parseInt(localStorage.getItem("i"))
    }
    console.log(contador)
    const { imagen, descripcion, nombre } = informacion[contador];
    imagen1.setAttribute("src", imagen)
    desc.textContent = descripcion
    titulo.textContent = nombre
    nombre_b.textContent = nombre
    console.log("lu2")
    if (contador == 0) {
        izquierda.setAttribute("disabled", "true")
    } else {
        izquierda.removeAttribute("disabled")
    }
    if (contador == informacion.length - 1) {
        derecha.setAttribute("disabled", "true")
    } else {
        derecha.removeAttribute("disabled")
    }
})

nombre_b.addEventListener("click", () => { 
    izquierda.classList.add("ocultar")
    derecha.classList.add("ocultar")
    nombre_b.classList.add("ocultar")
    personaje.classList.replace("personaje", "mostrar_desc")
    volver.classList.remove("ocultar")  
    info_container.classList.remove("ocultar")
})

volver.addEventListener("click", () => {
    izquierda.classList.remove("ocultar")
    derecha.classList.remove("ocultar")
    nombre_b.classList.remove("ocultar")
    personaje.classList.replace("mostrar_desc", "personaje")
    volver.classList.add("ocultar")
    info_container.classList.add("ocultar")
})
