import { InformacionVenta } from './informacionVenta.model';

export interface Venta {
    id?: number;
    vigenciaDesde: Date ;
    vigenciaHasta: Date ;
    vendedor: Array<InformacionVenta>;
    comision: Array<InformacionVenta>;
}
