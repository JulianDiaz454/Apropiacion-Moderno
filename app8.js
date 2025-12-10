// Es importa la función
import { fusionarColecciones } from "./modulos/FusionColecciones.js"

// Listas de prueba
const listaA = [10, 20, 30];
const listaB = [40, 50, 60];
const A=0;
// Obtenemos el nuevo arreglo
let coleccionFinal = fusionarColecciones(listaA, listaB);
// Imprimimos el resultado
console.log(`Colección fusionada: ${coleccionFinal}`);