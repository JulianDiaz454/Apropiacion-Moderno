// Función que valida la actividad y la guarda
export const registrarActividad = (actividad) => {
    
    // Usamos trycatch para la validación
    try {
        // Con ! verificamos si son null
        if (!actividad.nombre || !actividad.fecha) {
            // Si falta alguna propiedad se lanza el error
            throw new Error("Actividad no valida, faltan propiedades");
        }
        
        // Si son validas mostramos el mensaje
        console.log(`Registro exitoso: Actividad ${actividad.nombre} agreda para hacer en la fecha ${actividad.fecha}`);

    } catch (error) {
        // Relanzamos el error para terminar la función
        console.log(`Error: ${error.message}`);
        throw error;
    }
};