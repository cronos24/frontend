import { Estado } from './Estado';
import { Sede } from './Sede';

export class Proyecto {
      proy_codi: number;
      sede_codi: number;
      sedeCodi: Sede;
      proy_nomb: string;
      proy_pnro: string;
      proy_dura: number;
      proy_desc: string;
      esta_codi: string;
      estaCodi: Estado;
  }