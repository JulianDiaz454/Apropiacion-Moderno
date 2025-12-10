// Es importa la función
import { analizarVenta } from "./modulos/AnalisisVentas.js"

// Arreglo de ventas (Dato fijo del ejercicio)
const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

// Obtenemos el total vendido del primer producto
let totalVendido = analizarVenta(ventas);

// Imprimimos el resultado (50 * 3 = 150)
console.log(`Total vendido del primer producto: ${totalVendido}`);