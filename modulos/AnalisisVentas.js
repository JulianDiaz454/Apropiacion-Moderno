// Función que usa destructuración profunda para calcular el total vendido del primer producto.
export const analizarVenta = (ventas) => {

    // Destructuración anidada prfunda
    const [{ detalles: { precio, unidades } }] = ventas;

    // Retorna el total vendido 
    return precio * unidades;
};