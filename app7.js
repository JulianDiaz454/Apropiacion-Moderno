    // Es importa la función
import { evaluar } from "./modulos/EvaluacionDatos.js"

import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

// Solicitamos los valores
let valor1 = Number(prompt("Ingrese el valor 1: "))
let valor2 = Number(prompt("Ingrese el valor 2: "))
let valor3 = Number(prompt("Ingrese el valor 3: "))


// Enviamos los valores individualmente por argumentos
let promedio = evaluar(valor1, valor2, valor3); 
console.log(`Promedio: ${promedio}`);
