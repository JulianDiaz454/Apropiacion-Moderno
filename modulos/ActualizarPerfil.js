// Función que fusiona el perfil 
export const actualizarPerfil = (perfil, ...nuevosDatos) => {

    // Creamos una copiar delperfil original
    let perfilFinal = { ...perfil };

    // Iteramos sobre todos los objetos de nuevosDatos
    for (const datosParciales of nuevosDatos) {
        // Con spread se esparcen los datos, se sobreescriben los existentes
        perfilFinal = { ...perfilFinal, ...datosParciales };
    }

    // Retornamos el nuevo perfil
    return perfilFinal;
};