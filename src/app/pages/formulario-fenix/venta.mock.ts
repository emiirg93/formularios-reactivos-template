import { Venta } from './venta.model';

export const VENTA: Venta = {
    id: 10101,
    vigenciaDesde: new Date(2020, 2, 1),
    vigenciaHasta: new Date(2020, 2, 15),
    vendedor: [
        {
            persona: {
                idPersona: 1, nombre: 'Juan', apellido: 'Perez', legajoTango: 111
            },
            porcentaje: 50
        },
        {
            persona: {
                idPersona: 2, nombre: 'Martin', apellido: 'Rodriguez', legajoTango: 222
            },
            porcentaje: 30
        }
    ],
    comision: [{
        persona: {
            idPersona: 3, nombre: 'Federico', apellido: 'Gonzales', legajoTango: 333
        },
        porcentaje: 20
    },
    {
        persona: {
            idPersona: 4, nombre: 'Sergio', apellido: 'Morales', legajoTango: 1
        },
        porcentaje: 70
    }
],
};
