const contenedorDeMensajes= document.querySelector("#contenedor-imagen");
const cantidadDeSolicitudes= document.querySelector("#cantidad-imagenes");
const IMG_1="https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg";
;


function funcion1() {
    let CANTIDAD_MAXIMA_ITERACIONES= cantidadDeSolicitudes.value;
    for (let i = 0; i < CANTIDAD_MAXIMA_ITERACIONES; i++){
    
        contenedorDeMensajes.innerHTML+=`<img src="${IMG_1}" alt="test">`;
       
    }
}