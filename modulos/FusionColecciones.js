// Función que fusiona dos listas
export const fusionarColecciones = (lista1, lista2) => {

    // Validamos que sean arreglos 
    try {
        // Si alguna de las dos listas no es un arreglo se lanza el error
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Una de las listas No es un arreglo");
        }
        
        // Esto crea un nuevo arreglo
        const coleccionFinal = [...lista1, ...lista2];       
        // Retornamos el arreglo
        return coleccionFinal;

    } catch (error) {
        // Capturamos el error de validación y lo relanzamos
        console.log(`Error: ${error.message}`);
        throw error;
    }
};