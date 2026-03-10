function comprar(producto, precio, imagen){

const numero = "51931417388";

const urlImagen = "https://evarstore.github.io/" + imagen;

const mensaje = `Hola, quiero comprar el reloj ${producto}.
Precio: S/${precio}

Imagen del producto:
${urlImagen}

¿Está disponible?`;

const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

}

