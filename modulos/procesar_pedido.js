// export const ProcesarPedido = (pedido, ...extras) => {
//     return {
//         ...pedido,
//         extras
//     }
// }

export const ProcesarPedido = (pedido, ...extras) => ({ ...pedido, extras});