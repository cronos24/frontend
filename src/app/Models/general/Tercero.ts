import { Estado } from "./Estado";
import { Pais } from "./Pais";
import { Ocupacion } from './Ocupacion';
import { Entidad } from './Entidad';
import { Sede } from './Sede';
export class Tercero {
  pers_auxi: number;
  pers_natu: String;
  pers_tdoc: String;
  pers_ndoc: number;
  pers_lexp: String;
  pers_dv: String;
  pers_ape1: String;
  pers_ape2: String;
  pers_nom1: String;
  pers_nom2: String;
  pers_ncom: String;
  pers_rsoc: String;
  pers_sexo: String;
  pers_fnac: Date;
  pers_grh: String;
  pers_ciur: String;
  pers_dirr: String;
  pers_dirc: String;
  pers_telf: String;
  pers_telc: String;
  pers_mail: String;
  pers_malt: String;
  ocup_codi: number;
  enad_codi: String;
  pers_imag: String;
  pers_pweb: String;
  pers_obse: Text;
  esta_codi: String;
  pers_codp: String;
  pers_fmod: Date;
  pers_freg: Date;
  username: String;
  esta_usua: String;
  pais_codi: number;
  sede_codi: number;
  sedeCodi: Sede;
  estaCodi: Estado;
  paisCodi: Pais;
  ocupCodi: Ocupacion;
  enadCodi: Entidad;
  pers_regi: number;
}
