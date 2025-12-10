// Es importa la función
import { agregarInventario } from "./modulos/Inventario.js"

// Inventario inicial
const inventario = ["cámara", "trípode", "micrófono"];

// Nuevo ítem a añadir
const nuevoItem = "iluminación LED";

// Mostramos el inventario original
console.log(`Arreglo original : ${inventario}`);

// Llamamos a la función y obtenemos el nuevo arreglo
let nuevoInventario = agregarInventario(inventario, nuevoItem);

// MOstramos el nuevo arreglo
console.log(`Nuevo Inventario: ${nuevoInventario}`);