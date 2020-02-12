import { Estado } from '../general/Estado';
import { Empresa } from '../general/Empresa';
import { Sede } from '../general/Sede';


export class Resolucion {
    reso_codi: number;
    reso_tfac: string;
    sede_codi: number;
    sedeCodi: Sede;
    cias_codi: number;
    ciasCodi: Empresa;
    reso_fech: Date;
    reso_tipo: string;
    reso_reso: string;
    reso_ini: number;
    reso_fin: number;
    reso_pref: string;
    reso_cons: number;
    esta_codi: string;
    estaCodi: Estado;
  }