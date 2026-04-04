import { asistenciaService } from "./asistencia.service.js";

const data = asistenciaService.previsualizarfechasFuturas(6)

console.log("data:", data)