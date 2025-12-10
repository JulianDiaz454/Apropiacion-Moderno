// Función que añade un nuevo ítem a la lista 
export const agregarInventario = (lista, nuevoItem) => {

    // Se crea la nueva lista en base a la anterior y el nuevo item
    const nuevaLista = [...lista, nuevoItem];

    // Calculamos el total de ítems
    const totalItems = nuevaLista.length;

    // Registramos el mensaje requerido
    console.log(`Nuevo inventario: ${totalItems} ítems`);

    // Retornamos la nueva lista 
    return nuevaLista;
};