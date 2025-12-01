import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

import { ProcesarPedido } from './procesar_pedido.js';


const pedido = {
    cliente : "Julian",
    producto : "Pan",
    cantidad : 10
}

const extra1 = prompt("Ingrese el extra 1: ");
const extra2 = prompt("Ingrese el extra 2: ");
const extra3 = prompt("Ingrese el extra 3: ");

const obj = ProcesarPedido(pedido, extra1, extra2, extra3);

console.log(obj);
