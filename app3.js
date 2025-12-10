// Es importa la función
import { registrarActividad } from "./modulos/RegistroActividad.js"

// Datos de prueba
const actividad = {
    nombre: "Exposición HTML y CSS",
    fecha: "11/12/2025"
};

// Enviamos a la función la actividad
registrarActividad(actividad)