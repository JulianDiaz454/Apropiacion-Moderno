// Es importa la función
import { actualizarPerfil } from "./modulos/ActualizarPerfil.js"

// Perfil de inicio
const perfil = {
    nombre: "Julian",
    edad: 18,
    ciudad: "Lebrija"
};

// Datos de actualización parciales
const cambioEdad = { edad: 22 };
const cambioUbicacion = { ciudad: "Medellín"};

// Llamamos a la función inmutable con múltiples objetos de actualización
let nuevoPerfil = actualizarPerfil(perfil, cambioEdad, cambioUbicacion,);

console.log("Nuevo perfil");
console.log(nuevoPerfil);

console.log("Perfil original");
console.log(perfil);