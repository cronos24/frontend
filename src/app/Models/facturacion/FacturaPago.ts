import { Factura } from './Factura';
import { MediosPago } from '../general/MediosPago';
import { MetodosPago } from '../general/MetodosPago';
import { Estado } from '../general/Estado';

export class FacturaPago {
    fpag_codi: number;
    fpag_freg: Date;
    fpag_fpag: Date;
    fpag_fven: Date;
    fact_codi: number;
    factCodi: Factura;
    mpag_codi: number;
    mpagCodi: MediosPago;
    metp_codi: string;
    metpCodi: MetodosPago;
    fpag_nref: string;
    fpag_valo: number;
    usua_codi: number;
    esta_codi: string;
    estaCodi: Estado;
  }