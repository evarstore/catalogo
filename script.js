function comprar(producto, precio){

const numero = "51931417388";

const mensaje = `Hola, quiero comprar el reloj ${producto} con precio S/${precio}. ¿Está disponible?`;

const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

}
