// Es importa la función
import { configurarUsuario } from "./modulos/ConfiguracionUsuario.js"

// Se importa prompt_sync
import prompt_sync from "prompt-sync";
// Se le asigna la función a la constante
const prompt = prompt_sync();

// Configuraciones por defecto
const defaults = { tema: "claro", idioma: "es" };

// Solicitamos la opción personalizada de tema
let temaPersonalizado = prompt("Ingrese el tema preferido: ");
// Solicitamos la opción personalizada de idioma
let idiomaPersonalizado = prompt("Ingrese el idioma preferido: ");

// Creamos el objeto basado en la entrada
const personalizadas = {
    tema: temaPersonalizado,
    idioma: idiomaPersonalizado
};

console.log("\n--- Mezclando Configuraciones ---");

// Obtenemos el retorno de la función
let idiomaFinal = configurarUsuario(defaults, personalizadas);

// Imprimimos el resultado
console.log(`Idioma resultante: ${idiomaFinal}`);