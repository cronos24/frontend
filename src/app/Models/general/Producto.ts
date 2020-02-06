import { Unidad } from './Unidad';
import { Grupo } from '../inventario/Grupo';
import { Estado } from './Estado';


export class Producto {
    prod_codi : number;
    grup_codi : number;
    grupCodi : Grupo;
    prod_tipo : string;
    umed_codi : number;
    umedCodi : Unidad;
    prod_codm : string;
    prod_cods : string;
    prod_refe : string;
    prod_desc : string;
    marc_nomb : string;
    prod_valc : number;
    prod_valv : number;
    prod_porv : number;
    prod_gara : number;
    esta_codi : String;
    estaCodi : Estado;
    prod_codb : string;
    prod_stoc : number;
    prod_smin : number;
    prod_smax : number;
    prod_secc : string;
    prod_venc : string;
    prod_vcoa : number;
    prod_iva : number;
    prod_ic : number;
    prod_vsal : string;
    prod_obse : string;
    prod_imag : string;
    prod_reqs : string;
    sede_codi : number;
    usua_codi : number;
}