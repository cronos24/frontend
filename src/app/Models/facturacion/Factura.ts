import { Estado } from '../general/Estado';
import { Empresa } from '../general/Empresa';
import { Resolucion } from './Resolucion';
import { Sede } from '../general/Sede';
import { Proyecto } from '../general/Proyecto';
import { SubProyecto } from '../general/SubProyecto';

export class Factura {
    fact_codi: number;
    fact_tipo: string;
    sede_codi: number;
    sedeCodi: Sede;
    proy_codi: number;
    proyCodi: Proyecto;
    spro_codi: number;
    sproCodi: SubProyecto;
    cias_codi: number;
    ciasCodi: Empresa;
    fact_fech: Date;
    reso_codi: number;
    resoCodi: Resolucion;
    reso_pref: string;
    fact_cons: number;
    pers_auxi: number;
    fact_peri: number;
    fact_venc: Date;
    fact_obse: string;
    esta_codi: string;
    estaCodi: Estado;
    usu_logi: number;
    temp_codi: number;
}