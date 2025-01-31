import { Unidad } from '../general/Unidad';
import { Producto } from '../general/Producto';
import { Factura } from './Factura';

export class FacturaDetalle {
    detf_codi: number;
    fact_codi: number;
    factCodi: Factura;
    prod_codi: number;
    prodCodi: Producto;
    detf_cant: number;
    detf_valu: number;
    detf_dcto: number;
    detf_iva: number;
    detf_ic: number;
    detf_nota: string;
    umed_codi: number;
    umedCodi: Unidad;
  }