import { Unidad } from '../general/Unidad';
import { Producto } from '../general/Producto';

export class FacturaDetalle {
    detf_codi: number;
    fact_codi: number;
    prod_codi: number;
    prodCodi: Producto;
    detf_cant: number;
    detf_valu: number;
    detf_dcto: number;
    detf_iva: number;
    detf_ic: number;
    umed_codi: number;
    umedCodi: Unidad;
  }