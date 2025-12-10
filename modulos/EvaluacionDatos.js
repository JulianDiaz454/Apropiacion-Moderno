// Función que recibe valores
export const evaluar = (...valores) => {
    // Inicializamos el acumulador de la suma
    let suma = 0;

    // Usamos trycatch para verificar que todos sean numericos
    try {
        // Iteramos sobre los valores recibidos por el rest
        for (const valor of valores) {
            // Verificamos si la variable no es de tipi numerico
            if (typeof valor !== 'number' || isNaN(valor)) {
                // Si encontramos un error
                throw new Error(`El valor (${valor}) No es de tipo numerico`);
            }

            // Si es válido lo agregamos a la suma
            suma += valor;
        }

    } catch (error) {
        // Capturamos el error y mostramos el mensaje adecuado
        console.error(`Error: ${error.message}`);      
        // Relanzamos el error 
        throw error;
    }

    // Si todo es válido calculamos el promedio
    const promedio = suma / valores.length;
    
    // Se retorna el promedio
    return promedio;
};