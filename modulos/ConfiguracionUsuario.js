// Función que mezcla configuraciones y obtiene el idioma 
export const configurarUsuario = (defaults, personalizadas) => {
    // Usamos spread para combinar ambas configuraciones sin mutarlas
    const configuracionNueva = { ...defaults, ...personalizadas };

    // Usamos destructuración para obtener el idioma 
    const { idioma } = configuracionNueva;

    // Retornamos el idioma resultante
    return idioma;
};