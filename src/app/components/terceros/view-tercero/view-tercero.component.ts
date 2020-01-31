import { Component, OnInit } from '@angular/core';
import { TercerosService } from 'src/app/services/terceros.service';
import { ActivatedRoute } from '@angular/router';
import { Tercero } from 'src/app/Models/general/Tercero';

@Component({
  selector: 'app-view-tercero',
  templateUrl: './view-tercero.component.html',
  styles: []
})
export class ViewTerceroComponent implements OnInit {
  id: any;
  sub: any;
  model: Tercero = {
    pers_auxi: null,
    pers_natu: "",
    pers_tdoc: "",
    pers_ndoc: null,
    pers_lexp: "",
    pers_dv: "",
    pers_ape1: "",
    pers_ape2: "",
    pers_nom1: "",
    pers_nom2: "",
    pers_ncom: "",
    pers_rsoc: "",
    pers_sexo: "",
    pers_fnac: null,
    pers_grh: "",
    pers_ciur: "",
    pers_dirr: "",
    pers_dirc: "",
    pers_telf: "",
    pers_telc: "",
    pers_mail: "",
    pers_malt: "",
    ocup_codi: null,
    enad_codi: "",
    pers_imag: "",
    pers_pweb: "",
    pers_obse: null,
    pers_fmod: null,
    pers_freg: null,
    username: "",
    esta_usua: "",
    pais_codi: null,
    sede_codi: null,
    esta_codi: "",
    estaCodi: {
      esta_codi: null,
      esta_tipo: "",
      esta_nomb: "",
      esta_colo: "",
    },
    paisCodi: {
      pais_codi: null,
      pais_isonum: null,
      pais_iso2: "",
      pais_iso3: "",
      pais_nombre: "",
    },
    ocupCodi: {
      ocup_codi: null,
      ocup_nomb: "",
    },
    enadCodi: {
      enad_codi: null,
      enad_nomb: "",
      estaCodi: null,
      esta_codi: "",
    }
  };

  constructor(
    private dataService: TercerosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.view(this.id);
    });
  }

  view(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      console.log(data[0]);
      this.model = data[0];
    });
  }

}
